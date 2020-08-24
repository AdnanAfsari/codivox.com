import * as React from 'react';

function Oval2x(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={101} height={102} viewBox="0 0 101 102" fill="none" {...props}>
      <path
        d="M28.13 25.965c6.473-2.998 27.842-15.726 42.936-4.31 14.002 12.705 13.486 44.984.603 59.183-12.883 14.2-32.167 8.58-46.17-4.123-14.001-12.704-19.803-40.363 2.63-50.75z"
        fill="#5A54FF"
        fillOpacity={0.1}
      />
    </svg>
  );
}

export default Oval2x;
