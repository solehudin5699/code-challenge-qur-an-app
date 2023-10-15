import { SVGProps } from 'react';

interface Props {
    fill?: string;
}

function Eye({ fill, ...rest }: Props & SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0_323_40180)">
        <path
          d="M0.832275 9.99992C0.832275 9.99992 4.16561 3.33325 9.99894 3.33325C15.8323 3.33325 19.1656 9.99992 19.1656 9.99992C19.1656 9.99992 15.8323 16.6666 9.99894 16.6666C4.16561 16.6666 0.832275 9.99992 0.832275 9.99992Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
        />
        <path
          d="M9.99902 12.5C11.3797 12.5 12.499 11.3807 12.499 10C12.499 8.61929 11.3797 7.5 9.99902 7.5C8.61831 7.5 7.49902 8.61929 7.49902 10C7.49902 11.3807 8.61831 12.5 9.99902 12.5Z"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
        />
      </g>
      <defs>
        <clipPath id="clip0_323_40180">
          <rect fill="white" height="20" transform="translate(-0.000976562)" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

Eye.defaultProps = {
  fill: 'currentColor',
};

export default Eye;
