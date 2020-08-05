import * as React from 'react';

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={27} viewBox="0 0 28 27" fill="none" {...props}>
      <path
        d="M26.6 12.15H15.4V1.35C15.4.605 14.773 0 14 0c-.773 0-1.4.605-1.4 1.35v10.8H1.4c-.773 0-1.4.605-1.4 1.35 0 .745.627 1.35 1.4 1.35h11.2v10.8c0 .745.627 1.35 1.4 1.35.773 0 1.4-.605 1.4-1.35v-10.8h11.2c.773 0 1.4-.605 1.4-1.35 0-.745-.627-1.35-1.4-1.35z"
        fill="#6670FD"
        fillOpacity={0.75}
      />
    </svg>
  );
}

export default Plus;
