import * as React from 'react';
function Warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" {...props}>
      <path
        d="M14 0C6.262 0 0 6.262 0 14s6.262 14 14 14 14-6.262 14-14S21.738 0 14 0zm0 25.813C7.47 25.813 2.187 20.529 2.187 14 2.188 7.47 7.471 2.187 14 2.187c6.53 0 11.813 5.284 11.813 11.813 0 6.53-5.284 11.813-11.813 11.813z"
        fill="#fff"
      />
      <path
        d="M14 7.048c-.604 0-1.094.49-1.094 1.094v7.043a1.094 1.094 0 002.188 0V8.142c0-.604-.49-1.094-1.094-1.094zM14 20.571a1.477 1.477 0 100-2.953 1.477 1.477 0 000 2.953z"
        fill="#fff"
      />
    </svg>
  );
}

export default Warning;
