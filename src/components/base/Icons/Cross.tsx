import { SVGProps } from 'react';

interface Props {
    fill?: string;
}

function Cross({ fill, ...props }: Props & SVGProps<SVGSVGElement>) {
  return (
    <svg fill={fill} height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        clipRule="evenodd"
        d="M12 13.8053L5.19415 20.6227C4.95306 20.8642 4.62659 21 4.28503 21H4.28501C3.76601 21 3.29719 20.6863 3.09798 20.2051C2.89874 19.7237 3.00924 19.1703 3.3759 18.8013L10.1817 11.984L3.37595 5.1666C2.9038 4.65844 2.91889 3.86856 3.40776 3.37714C3.89831 2.88744 4.6869 2.87233 5.1942 3.34527L12 10.1626L18.8058 3.3453C19.3131 2.87234 20.1016 2.88746 20.5922 3.37716C21.081 3.86854 21.0962 4.65846 20.6241 5.16663L13.8183 11.984L20.6241 18.8013C20.9907 19.1703 21.1013 19.7237 20.902 20.205C20.7028 20.6864 20.234 21 19.7149 21C19.3734 21 19.0469 20.8641 18.8058 20.6227L12 13.8053Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

Cross.defaultProps = {
  fill: 'currentColor',
};

export default Cross;
