import * as React from 'react';

function Sendgrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={39} viewBox="0 0 40 39" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path d="M13.333 13H0v26h26.667V13H13.333z" fill="#9DE1F3" />
        <path d="M13.334 0v26H40V0H13.334z" fill="#27B4E1" />
        <path
          d="M0 39h13.333V26H0v13zm26.667-26H40V0H26.667v13z"
          fill="#1A82E2"
        />
        <path d="M13.334 26h13.333V13H13.333v13z" fill="#239FD7" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h40v39H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Sendgrid;
