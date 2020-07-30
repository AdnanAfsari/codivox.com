import React from 'react';

function Linkedin(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <path
        d="M17.099 10.75v5.99h-3.472v-5.59c0-1.403-.502-2.361-1.759-2.361-.96 0-1.53.646-1.782 1.27-.09.224-.115.534-.115.847v5.833H6.498s.046-9.464 0-10.444h3.473v1.48l-.023.035h.023v-.034c.461-.712 1.285-1.726 3.13-1.726 2.286 0 3.998 1.493 3.998 4.7zM2.867 1.26C1.677 1.26.9 2.04.9 3.065c0 1.001.755 1.805 1.92 1.805h.022c1.21 0 1.964-.803 1.964-1.805C4.784 2.04 4.053 1.26 2.865 1.26h.001zm-1.76 15.48H4.58V6.295H1.108V16.74z"
        fill="#141633"
      />
    </svg>
  );
}

export default Linkedin;
