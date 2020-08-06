import * as React from 'react';

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={72} height={69} viewBox="0 0 110 109" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <ellipse cx={55} cy={54.5} rx={35} ry={34.5} fill="#FAFAFF" />
        <path
          d="M89 54.5C89 72.988 73.791 88 55 88S21 72.988 21 54.5 36.209 21 55 21s34 15.012 34 33.5z"
          stroke="#6670FD"
          strokeOpacity={0.1}
          strokeWidth={2}
        />
      </g>
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M67.55 53.15h-11.6v-10.8c0-.745-.65-1.35-1.45-1.35-.8 0-1.45.605-1.45 1.35v10.8h-11.6c-.8 0-1.45.605-1.45 1.35 0 .745.65 1.35 1.45 1.35h11.6v10.8c0 .745.65 1.35 1.45 1.35.8 0 1.45-.605 1.45-1.35v-10.8h11.6c.8 0 1.45-.605 1.45-1.35 0-.745-.65-1.35-1.45-1.35z"
          fill="#6670FD"
          fillOpacity={0.75}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" transform="translate(40 41)" d="M0 0h29v27H0z" />
        </clipPath>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={110}
          height={109}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feColorMatrix values="0 0 0 0 0.4 0 0 0 0 0.439216 0 0 0 0 0.992157 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Plus;
