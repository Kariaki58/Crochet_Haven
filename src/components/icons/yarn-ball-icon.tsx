import type { SVGProps } from 'react';

export function YarnBallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12c0-3.31 2.69-6 6-6" />
      <path d="M12 12c0 3.31-2.69 6-6 6" />
      <path d="M12 12c3.31 0 6-2.69 6-6" />
      <path d="M12 12c-3.31 0-6-2.69-6-6" />
      <path d="M12 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6" />
      <path d="M12 12c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6" />
      <path d="M12 12c3.31 0 6 2.69 6 6" />
      <path d="M12 12c-3.31 0-6 2.69-6 6" />
      <path d="M18 6c.69.25 1.35.58 2 1" />
      <path d="M6 18c-.69-.25-1.35-.58-2-1" />
      <path d="M18 18c.69-.25 1.35-.58 2-1" />
      <path d="M6 6c-.69.25-1.35.58-2 1" />
    </svg>
  );
}
