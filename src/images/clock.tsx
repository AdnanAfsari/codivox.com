import * as React from 'react';

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={36} viewBox="0 0 48 36" fill="none" {...props}>
      <path
        d="M8.108 11.262H2.596v2.695h5.512v-2.695zM8.108 22.043H2.596v2.695h5.512v-2.695zM8.108 16.652H0v2.696h8.108v-2.696zM29.46.233C19.221.233 10.92 8.188 10.92 18c0 9.813 8.301 17.767 18.54 17.767C39.7 35.767 48 27.812 48 18S39.7.233 29.46.233zm5.847 25.064l-7.792-5.09V9.305h2.813v9.479l6.563 4.286-1.584 2.228z"
        fill="#6670FD"
      />
    </svg>
  );
}

export default Clock;
