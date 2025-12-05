import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = false,
  className = '',
  children,
  onClick
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300';

  const variantStyles = {
    default: 'bg-white p-8 shadow-md',
    elevated: 'bg-white p-8 shadow-lg',
    outlined: 'bg-white p-8 border-2 border-gray-200',
    gradient: 'bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 p-8 backdrop-blur-sm border border-white/20'
  };

  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:scale-105 hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
