import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}
const buttonClasses = cva('relative rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: ['text-white bg-black transition-colors ease-in'],
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Button = ({
  children,
  href,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={buttonClasses({ variant, size, className: props.className })}
      href={href}
    >
      {children}
    </Link>
  );
};
