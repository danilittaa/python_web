import { IconProps } from "./iconProps.props";

const TemperatureIcon = ({ size = 30 }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <path d="M0 0h48v48H0z" fill="none" />
      <g id="Shopicon">
        <path
          d="M24,38c2.209,0,4-1.791,4-4c0-1.477-0.809-2.752-2-3.445V16h-4v14.555c-1.191,0.693-2,1.969-2,3.445
		C20,36.209,21.791,38,24,38z"
        />
        <path
          d="M24,44c5.514,0,10-4.486,10-10c0-2.171-0.713-4.272-2-5.989V12c0-4.411-3.589-8-8-8s-8,3.589-8,8v16.011
		c-1.287,1.717-2,3.818-2,5.989C14,39.514,18.486,44,24,44z M20,29.537V12c0-2.2,1.8-4,4-4s4,1.8,4,4v17.537
		c1.225,1.098,2,2.688,2,4.463c0,3.314-2.686,6-6,6s-6-2.686-6-6C18,32.225,18.775,30.635,20,29.537z"
        />
      </g>
    </svg>
  );
};

export { TemperatureIcon };
