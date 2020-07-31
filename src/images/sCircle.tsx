import React from 'react';

function SCircle(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg width={104} height={104} viewBox="0 0 104 104" fill="none" {...props}>
      <circle cx={52} cy={52} r={50} stroke="#fff" strokeWidth={4} />
    </svg>
  );
}

export default SCircle;
