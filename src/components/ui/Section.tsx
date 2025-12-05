import React from 'react';

export type SectionBackground = 'white' | 'gray' | 'gradient' | 'dark';

interface SectionProps {
  background?: SectionBackground;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  background = 'white',
  className = '',
  children
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-secondary-dark',
    dark: 'bg-brand-secondary text-white'
  };

  return (
    <section className={`py-20 ${backgroundStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  light = false
}) => {
  const textColor = light ? 'text-white' : 'text-brand-secondary';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-6 leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl ${subtitleColor} max-w-3xl ${centered ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Section;
