import { SVGProps } from 'react';

interface Props {
  fill?: string;
}

function ChevronDown({ fill, ...rest }: Props & SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="6" viewBox="0 0 10 6" width="10" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M8.92194 1.92129C9.24737 1.59585 9.24737 1.06821 8.92194 0.742776C8.5965 0.417339 8.06886 0.417339 7.74343 0.742776L8.92194 1.92129ZM4.99935 4.66536L4.41009 5.25462C4.73553 5.58006 5.26317 5.58006 5.5886 5.25462L4.99935 4.66536ZM2.25527 0.742776C1.92983 0.417339 1.4022 0.417339 1.07676 0.742776C0.751323 1.06821 0.751323 1.59585 1.07676 1.92129L2.25527 0.742776ZM7.74343 0.742776L4.41009 4.07611L5.5886 5.25462L8.92194 1.92129L7.74343 0.742776ZM5.5886 4.07611L2.25527 0.742776L1.07676 1.92129L4.41009 5.25462L5.5886 4.07611Z"
        fill={fill}
      />
    </svg>
  );
}

ChevronDown.defaultProps = {
  fill: 'currentColor',
};

export default ChevronDown;
