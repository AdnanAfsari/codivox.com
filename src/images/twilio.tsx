import * as React from 'react';

function Twilio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={55} height={54} viewBox="0 0 70 69" fill="none" {...props}>
      <title>Twilio API</title>
      <ellipse cx={35} cy={34.5} rx={35} ry={34.5} fill="#F4F5FF" />
      <path
        d="M69 34.5C69 52.988 53.791 68 35 68S1 52.988 1 34.5 16.209 1 35 1s34 15.012 34 33.5z"
        stroke="#6670FD"
        strokeOpacity={0.1}
        strokeWidth={2}
      />
      <path
        d="M35.477 49.603c-8.736 0-15.817-6.752-15.817-15.08 0-8.33 7.081-15.081 15.817-15.081 8.735 0 15.816 6.752 15.816 15.08 0 8.33-7.081 15.081-15.816 15.081zm0-35.558C23.614 14.045 14 23.213 14 34.522 14 45.833 23.615 55 35.477 55c11.86 0 21.476-9.168 21.476-20.477 0-11.31-9.616-20.478-21.477-20.478z"
        fill="#CF272D"
      />
      <path
        d="M36.36 29.422c0-2.35 1.998-4.257 4.465-4.257 2.466 0 4.465 1.906 4.465 4.258 0 2.351-1.999 4.258-4.465 4.258-2.467 0-4.466-1.907-4.466-4.258zm0 10.2c0-2.351 1.998-4.258 4.465-4.258 2.466 0 4.465 1.907 4.465 4.258 0 2.352-1.999 4.258-4.465 4.258-2.467 0-4.466-1.906-4.466-4.258zm-10.698 0c0-2.351 2-4.258 4.466-4.258s4.465 1.907 4.465 4.258c0 2.352-1.999 4.258-4.465 4.258-2.466 0-4.466-1.906-4.466-4.258zm0-10.2c0-2.35 2-4.257 4.466-4.257s4.465 1.906 4.465 4.258c0 2.351-1.999 4.258-4.465 4.258-2.466 0-4.466-1.907-4.466-4.258z"
        fill="#CF272D"
      />
    </svg>
  );
}

export default Twilio;
