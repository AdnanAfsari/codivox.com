import * as React from 'react';

function Union(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={8} height={11} viewBox="0 0 8 11" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.277 9.86c.37.289.97.289 1.34 0l5.355-4.187c.204-.16.296-.374.274-.583a.664.664 0 00-.277-.54L1.616.36C1.246.072.647.072.277.361c-.37.29-.37.758 0 1.047l4.735 3.704L.277 8.813c-.37.289-.37.758 0 1.047z"
        fill="#fff"
      />
    </svg>
  );
}

export default Union;
