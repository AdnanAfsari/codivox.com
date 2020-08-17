import * as React from 'react';

function Cross(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M14.436 13L25.703 1.734A1.016 1.016 0 1024.265.297L13 11.564 1.734.297A1.016 1.016 0 10.297 1.734L11.564 13 .297 24.266a1.016 1.016 0 101.437 1.437L13 14.436l11.266 11.267a1.013 1.013 0 001.437 0 1.015 1.015 0 000-1.437L14.436 13z"
        fill="#000"
      />
    </svg>
  );
}

export default Cross;
