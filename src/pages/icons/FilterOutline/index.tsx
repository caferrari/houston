import Icon, { IconProps } from '../Icon';

const FilterOutline = (props: IconProps) => {
  return (
    <Icon {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M92.2596 70.7743L53.4853 32H139.046L100.272 70.7743C98.5135 72.5328 98.0748 75.1113 98.9558 77.279L98.5539 148.103L94.5147 152.142V76C94.5147 74.8288 94.1792 73.736 93.5989 72.8125C93.3062 72.0702 92.8598 71.3745 92.2596 70.7743ZM91.2913 171.32C90.461 171.754 89.5166 172 88.5147 172C85.201 172 82.5147 169.314 82.5147 166V78L35.7574 31.2426C33.4142 28.8995 33.4142 25.1005 35.7574 22.7574C36.2754 22.2393 36.8647 21.8358 37.4936 21.5468C38.5576 20.5854 39.9678 20 41.5147 20H151.515C153.41 20 155.1 20.8786 156.199 22.2506C156.399 22.4052 156.591 22.5741 156.774 22.7573C159.117 25.1005 159.117 28.8995 156.774 31.2426L110.957 77.0597L110.543 150.068C110.538 150.978 110.33 151.84 109.963 152.61C109.692 153.553 109.184 154.443 108.441 155.187L93.814 169.814C93.0848 170.543 92.2147 171.045 91.2913 171.32Z'
      />
    </Icon>
  );
};

export default FilterOutline;
