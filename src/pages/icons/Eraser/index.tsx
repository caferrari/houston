import Icon, { IconProps } from '../Icon';

const Eraser = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M62.3168 168C59.6645 168 57.1209 166.946 55.2456 165.071L18.9286 128.752C15.0235 124.847 15.0235 118.515 18.9286 114.61L106.606 26.9289C110.511 23.0237 116.842 23.0237 120.747 26.9289L173.071 79.2548C176.976 83.1601 176.976 89.4917 173.071 93.397L110.471 156H154C157.313 156 160 158.686 160 162C160 165.314 157.313 168 154 168H96.9995C96.6 168 96.2096 167.961 95.8319 167.886C95.3375 167.962 94.8352 168 94.329 168H62.3168ZM54.2673 96.2404L28.8276 121.681L63.1449 156H93.5009L103.761 145.739L54.2673 96.2404ZM154.672 94.8262L163.172 86.3259L113.677 36.8284L105.178 45.3276L154.672 94.8262Z'
      />
    </Icon>
  );
};

export default Eraser;
