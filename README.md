# Crochet Haven - Custom Crochet Creations

Welcome to the Crochet Haven project! This is a modern, responsive landing page for a bespoke crochet business. It's designed to showcase beautiful, handcrafted items, explain the custom order process, and capture new customer orders.

## ✨ Features

-   **Stunning Landing Page**: A beautifully designed single-page experience to attract and engage customers.
-   **Dynamic Sections**: Includes a hero section, product gallery, testimonials, and an "About the Maker" section to build trust.
-   **Custom Order System**: A seamless order modal allows customers to submit detailed requests for custom pieces.
-   **Server-Side Logic**: Utilizes Next.js Server Actions for robust and secure form processing.
-   **Email Notifications**: Integrated with EmailJS to send order details directly to your inbox.
-   **Responsive Design**: Looks great on all devices, from desktops to mobile phones.
-   **AI Ready**: Built with Genkit for future AI-powered features like design suggestions or customer support bots.

## 🚀 Tech Stack

This project is built with a modern, performant, and developer-friendly tech stack:

-   **Framework**: [Next.js](https://nextjs.org/) (with App Router)
-   **UI Library**: [React](https://react.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
-   **Form Handling**: React `useActionState` Hook
-   **Email**: [EmailJS](https://www.emailjs.com/)
-   **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)

## 📦 Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a file named `.env.local` in the root of your project and add the following environment variables. These are required for the order form to send emails.

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

You can get these values from your [EmailJS account dashboard](https://dashboard.emailjs.com/).

### 4. Configure Your EmailJS Template

In your EmailJS account, you need to create an email template with the ID you specified in your `.env.local` file. Use the following structure for your template:

-   **Template Subject:**
    `New Custom Order from {{from_name}}`

-   **Template Body (HTML):**
    ```html
    <h3>You've received a new custom order request!</h3>
    <p>Here are the details:</p>
    <hr>
    <p><strong>Customer Name:</strong> {{from_name}}</p>
    <p><strong>Customer Email:</strong> {{from_email}}</p>
    <hr>
    <h4>Order Details:</h4>
    <p><strong>Product Details:</strong></p>
    <p>{{product_details}}</p>
    <p><strong>Measurements:</strong></p>
    <p>{{measurements}}</p>
    <p><strong>Agreed Price:</strong> ${{agreed_price}}</p>
    <hr>
    <p>Please reach out to {{from_email}} to confirm the order and discuss next steps.</p>
    <p><em>- Your Crochet Haven Website</em></p>
    ```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
.
├── src
│   ├── app                 # Next.js App Router: pages, layouts, and server actions
│   │   ├── actions.ts      # Server Action for handling form submissions
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # The main landing page component
│   │
│   ├── components          # Reusable React components
│   │   ├── icons           # Custom SVG icons
│   │   ├── landing         # Components specific to the landing page sections
│   │   ├── ui              # ShadCN UI components
│   │   └── order-modal.tsx # The dialog component for placing orders
│   │
│   ├── hooks               # Custom React hooks (e.g., useToast)
│   ├── lib                 # Utility functions
│   └── ai                  # Genkit AI configuration and flows
│
├── public                  # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 📜 Available Scripts

-   `npm run dev`: Starts the Next.js development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts a production server.
-   `npm run lint`: Runs ESLint to check for code quality issues.
-   `npm run typecheck`: Runs the TypeScript compiler to check for type errors.
