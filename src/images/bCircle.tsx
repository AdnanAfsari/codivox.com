import React from 'react';

function BCircle(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg width={150} height={222} viewBox="0 0 222 222" fill="none" {...props}>
      <circle cx={111} cy={111} r={106} stroke="#fff" strokeWidth={10} />
    </svg>
  );
}

export default BCircle;
