import * as React from 'react';

function GraphqlSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={38} height={41} viewBox="0 0 38 41" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.648 4.695l8.78 4.861c.253-.257.544-.478.863-.655 1.82-1.004 4.143-.408 5.2 1.338 1.048 1.746.426 3.973-1.395 4.987a3.912 3.912 0 01-1.014.388v9.725c.352.082.69.212 1.004.385 1.831 1.014 2.453 3.241 1.395 4.988-1.047 1.746-3.38 2.342-5.2 1.338a3.75 3.75 0 01-.942-.733l-8.726 4.831c.128.372.193.76.192 1.15 0 2.008-1.7 3.65-3.805 3.65-2.104 0-3.805-1.631-3.805-3.65 0-.358.054-.705.154-1.032l-8.777-4.86a3.81 3.81 0 01-.852.644c-1.832 1.004-4.154.408-5.201-1.338-1.047-1.747-.425-3.974 1.396-4.988a3.91 3.91 0 011.003-.385v-9.725a3.912 3.912 0 01-1.014-.388C.083 14.223-.54 11.986.508 10.24c1.047-1.746 3.38-2.342 5.2-1.338.318.176.608.395.86.65L15.35 4.69a3.523 3.523 0 01-.155-1.037c0-2.018 1.7-3.65 3.805-3.65 2.104 0 3.805 1.632 3.805 3.65 0 .362-.055.712-.157 1.043zm-.915 1.498l8.8 4.872a3.5 3.5 0 00.362 2.823 3.772 3.772 0 002.377 1.717v9.738c-.049.012-.098.024-.147.038L21.631 6.29l.102-.098zm-5.362.1L4.878 25.382l-.15-.039v-9.739a3.772 3.772 0 002.377-1.717c.255-.424.418-.893.48-1.379a3.5 3.5 0 00-.12-1.45l8.798-4.87c.035.035.071.07.108.103zm3.692.864l11.491 19.086a3.659 3.659 0 00-1.07 1.781H7.517a3.574 3.574 0 00-1.07-1.776L17.94 7.158a3.97 3.97 0 002.123-.001zm1.751 27.683L30.557 30a3.563 3.563 0 01-.07-.24H7.512a3.547 3.547 0 01-.04.141l8.787 4.865c.354-.354.78-.635 1.251-.827.471-.192.978-.29 1.49-.29.53 0 1.054.105 1.538.31.485.205.92.505 1.276.881z"
        fill="#E535AB"
      />
    </svg>
  );
}

export default GraphqlSvg;
