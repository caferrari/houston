import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M147.33 58.6383C149.191 46.8085 147.33 38.8085 140.987 31.4894C133.968 23.4043 121.366 20 105.128 20H58.1908C54.8925 20 52.1017 22.383 51.5942 25.7021L32.058 150.468C31.6352 152.936 33.5803 155.149 36.0329 155.149H64.9566L62.9269 167.915C62.5886 170.043 64.2801 172 66.3944 172H90.8357C93.7112 172 96.1638 169.872 96.6712 166.979L96.9249 165.702L101.492 136.34L101.83 134.723C102.253 131.83 104.706 129.702 107.666 129.702H111.302C134.982 129.702 153.504 120 158.916 92.0851C161.2 80.4255 160.016 70.6383 154.011 63.7447C152.235 61.7021 149.952 60 147.33 58.6383Z'
      fill='#009BDE'
    />
    <path
      d='M147.33 58.6383C149.191 46.8085 147.33 38.8085 140.987 31.4894C133.968 23.4043 121.366 20 105.128 20H58.1909C54.8925 20 52.1017 22.383 51.5942 25.7021L32.058 150.468C31.6352 152.936 33.5803 155.149 36.0329 155.149H64.9566L72.2298 108.681L71.9761 110.128C72.4836 106.809 75.2744 104.426 78.5728 104.426H92.358C119.421 104.426 140.564 93.3617 146.823 61.3617C147.076 60.4255 147.161 59.4894 147.33 58.6383Z'
      fill='#022169'
    />
    <path
      d='M80.0951 58.8085C80.4333 56.8511 81.7019 55.234 83.3934 54.383C84.1545 54.0425 85.0002 53.7872 85.9305 53.7872H122.719C127.117 53.7872 131.177 54.0425 134.898 54.6383C135.997 54.8085 137.012 54.9787 138.027 55.234C139.042 55.4894 139.972 55.7447 140.987 56C141.494 56.1702 141.917 56.2553 142.34 56.4255C144.201 57.0213 145.892 57.7872 147.415 58.5532C149.275 46.7234 147.415 38.7234 141.072 31.4043C133.968 23.4043 121.366 20 105.128 20H58.1908C54.8925 20 52.1017 22.383 51.5942 25.7021L32.058 150.468C31.6352 152.936 33.5803 155.149 36.0329 155.149H64.9566L72.2298 108.681L80.0951 58.8085Z'
      fill='#002F87'
    />
  </svg>
);
