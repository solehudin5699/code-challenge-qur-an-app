import { SVGProps } from 'react';

interface Props {
  stroke?: string;
}

function Clock({ stroke, ...props }: Props & SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.0007 8.00067C14.0007 11.3144 11.3144 14.0007 8.00067 14.0007C4.68695 14.0007 2.00065 11.3144 2.00065 8.00067C2.00065 4.68695 4.68695 2.00065 8.00067 2.00065C11.3144 2.00065 14.0007 4.68695 14.0007 8.00067Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33334"
      />
      <path
        d="M8 4.33398V8.00066L10 10.0007"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33334"
      />
    </svg>
  );
}

Clock.defaultProps = {
  stroke: 'currentColor',
};

export default Clock;
