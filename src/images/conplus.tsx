import * as React from 'react';

function Conplus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={48} height={46} viewBox="0 0 48 46" fill="none" {...props}>
      <path
        d="M24 0C10.736 0 0 10.287 0 23c0 6.227 2.589 11.937 6.873 16.111L1.436 46H24c13.264 0 24-10.287 24-23C48 10.289 37.266 0 24 0zm9.844 27.043h-5.625v5.39H19.78v-5.39h-5.625v-8.086h5.625v-5.39h8.438v5.39h5.625v8.086z"
        fill="#6670FD"
      />
      <path
        d="M25.406 16.262h-2.812v5.39h-5.625v2.696h5.625v5.39h2.812v-5.39h5.625v-2.696h-5.625v-5.39z"
        fill="#6670FD"
      />
    </svg>
  );
}

export default Conplus;
