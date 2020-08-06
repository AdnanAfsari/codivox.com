import * as React from 'react';

function Sendgrid(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={71} height={69} viewBox="0 0 71 69" fill="none" {...props}>
      <ellipse cx={35.5} cy={34.5} rx={35.5} ry={34.5} fill="#F4F5FF" />
      <path
        d="M70 34.5C70 52.975 54.581 68 35.5 68S1 52.975 1 34.5 16.419 1 35.5 1 70 16.025 70 34.5z"
        stroke="#6670FD"
        strokeOpacity={0.1}
        strokeWidth={2}
      />
      <path d="M28.333 28H15v26h26.667V28H28.333z" fill="#9DE1F3" />
      <path d="M28.334 15v26H55V15H28.334z" fill="#27B4E1" />
      <path
        d="M15 54h13.333V41H15v13zm26.667-26H55V15H41.667v13z"
        fill="#1A82E2"
      />
      <path d="M28.334 41h13.333V28H28.333v13z" fill="#239FD7" />
    </svg>
  );
}

export default Sendgrid;
