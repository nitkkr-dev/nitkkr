'use client';

import React, { useState } from 'react';

interface ButtonProps {
  variant: 'solid' | 'outline';
  title: string;
}

const Button: React.FC<ButtonProps> = ({ variant, title }) => {
  const [state, setState] = useState<
    'default' | 'active' | 'hovered' | 'clicked' | 'disabled'
  >('default');

  let bgColorClasses = '';
  let textColorClasses = '';
  let borderClasses = '';

  switch (variant) {
    case 'solid':
      switch (state) {
        case 'active':
          bgColorClasses = 'bg-primary-30';
          textColorClasses = 'text-neutral-10';
          break;
        case 'hovered':
          bgColorClasses = 'bg-primary-20';
          textColorClasses = 'text-neutral-10';
          break;
        case 'clicked':
          bgColorClasses = 'bg-primary-40';
          textColorClasses = 'text-neutral-10';
          break;
        case 'disabled':
          bgColorClasses = 'bg-primary-0';
          textColorClasses = 'text-neutral-60';
          break;
        default:
          bgColorClasses = 'bg-primary-30';
          textColorClasses = 'text-neutral-10';
          break;
      }
      break;
    case 'outline':
      switch (state) {
        case 'active':
          bgColorClasses = 'bg-transparent';
          textColorClasses = 'text-primary-30';
          borderClasses = 'border border-primary-30';
          break;
        case 'hovered':
          bgColorClasses = 'bg-transparent';
          textColorClasses = 'text-primary-20';
          borderClasses = 'border border-primary-20';
          break;
        case 'clicked':
          bgColorClasses = 'bg-transparent';
          textColorClasses = 'text-primary-40';
          borderClasses = 'border border-primary-40';
          break;
        case 'disabled':
          bgColorClasses = 'bg-transparent';
          textColorClasses = 'text-primary-0';
          borderClasses = 'border border-primary-0';
          break;
        default:
          bgColorClasses = 'bg-transparent';
          textColorClasses = 'text-primary-30';
          borderClasses = 'border border-primary-30';
          break;
      }
      break;
    default:
      break;
  }

  return (
    <button
      className={`rounded-md px-4 py-2 focus:outline-none ${bgColorClasses} ${textColorClasses} ${borderClasses}`}
      onMouseEnter={() => setState('hovered')}
      onMouseLeave={() => setState('default')}
      onMouseDown={() => setState('clicked')}
      onMouseUp={() => setState('default')}
      onFocus={() => setState('active')}
      disabled={state === 'disabled'}
    >
      {title}
    </button>
  );
};

export default Button;
