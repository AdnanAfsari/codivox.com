import React from 'react';

function Fb(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M6.744 17.983v-7.845H4.343V6.61h2.456V3.69S6.911.011 10.062-.018h3.507v3.463h-2.175s-.919 0-.919 1.035v2.191h3.147l-.378 3.527H10.53v7.785H6.744z"
          fill="#141633"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h18v18H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Fb;
