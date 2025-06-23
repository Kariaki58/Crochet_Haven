'use server';

export type OrderFormState = {
  message: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    productDetails?: string[];
    measurements?: string[];
    agreedPrice?: string[];
  };
  status: 'success' | 'error' | null;
};


export async function submitOrder(prevState: OrderFormState, formData: FormData): Promise<OrderFormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const productDetails = formData.get('productDetails') as string;
  const measurements = formData.get('measurements') as string;
  const agreedPrice = formData.get('agreedPrice');

  const errors: OrderFormState['errors'] = {};

  if (!name || name.trim().length < 2) {
    errors.name = ['Name must be at least 2 characters.'];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ['Please enter a valid email address.'];
  }

  if (!productDetails || productDetails.trim().length < 10) {
    errors.productDetails = ['Please describe the product you want in at least 10 characters.'];
  }
  
  const priceAsNumber = Number(agreedPrice);
  if (agreedPrice === null || agreedPrice === '' || isNaN(priceAsNumber) || priceAsNumber <= 0) {
    errors.agreedPrice = ['Please enter a valid price.'];
  }

  if (Object.keys(errors).length > 0) {
    return {
      message: 'Please correct the errors and try again.',
      errors,
      status: 'error',
    };
  }

  const {  } = errors;
  
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    const missingKeys = [
      !serviceID && 'Service ID',
      !templateID && 'Template ID',
      !publicKey && 'Public Key'
    ].filter(Boolean).join(', ');
    
    console.error(`EmailJS environment variables are missing: ${missingKeys}`);
    return {
        message: `Server configuration error: a required EmailJS variable is missing.`,
        status: 'error',
    };
  }
  
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Crochet Haven',
    product_details: productDetails,
    measurements: measurements || 'N/A',
    agreed_price: priceAsNumber.toString(),
  };

  const emailData = {
    service_id: serviceID,
    template_id: templateID,
    user_id: publicKey,
    template_params: templateParams,
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
    });

    if (response.ok) {
        return { message: 'Your order has been placed successfully! We will contact you shortly to confirm the details.', status: 'success' };
    } else {
        const errorText = await response.text();
        console.error('Failed to send email:', errorText);
        return { message: `Failed to place order. Please try again later.`, status: 'error' };
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return { message: 'Failed to place order. Please try again later.', status: 'error' };
  }
}
