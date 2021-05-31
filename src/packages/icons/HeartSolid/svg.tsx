import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M96.5 167C96.5 167 45.4078 118.413 36.032 106.266C26.6562 94.1182 22 80.0563 22 67.9189C22 44.7677 40.3451 26 62.975 26C76.8332 26 89.0845 33.0382 96.5 43.8111C103.915 33.0382 116.167 26 130.025 26C152.655 26 171 44.7677 171 67.9189C171 80.0563 166.344 94.1182 156.968 106.266C147.592 118.413 96.5 167 96.5 167Z'
      fill='#546E7A'
    />
  </svg>
);
