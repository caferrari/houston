import Icon, { IconProps } from '../Icon';

const CopyOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M44 51.9656V163.966H122V51.9656H44ZM42 39.9656C36.4772 39.9656 32 44.4427 32 49.9656V165.966C32 171.488 36.4772 175.966 42 175.966H124C129.523 175.966 134 171.488 134 165.966V49.9656C134 44.4427 129.523 39.9656 124 39.9656H42Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M70.0695 16.0001C66.7558 15.9811 64.0542 18.652 64.0353 21.9657C64.0163 25.2793 66.6872 27.9809 70.0008 27.9999L147 28.4404V105.966C147 109.279 149.686 111.966 153 111.966C156.314 111.966 159 109.279 159 105.966V23.1483C159.023 22.9384 159.036 22.7251 159.037 22.5091C159.056 19.1955 156.385 16.4939 153.072 16.4749L70.0695 16.0001Z'
      />
    </Icon>
  );
};

export default CopyOutline;
