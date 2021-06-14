import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96.5 64.9752L86.6154 50.6151C81.3004 42.8937 72.6456 38 62.975 38C47.2287 38 34 51.136 34 67.9189C34 77.1734 37.6308 88.6972 45.5315 98.9335C49.5792 104.178 63.9204 118.643 78.1808 132.617C85.0301 139.329 91.6004 145.678 96.5 150.388C101.4 145.678 107.97 139.329 114.819 132.617C129.08 118.643 143.421 104.178 147.468 98.9335C155.369 88.6972 159 77.1734 159 67.9189C159 51.136 145.771 38 130.025 38C120.354 38 111.7 42.8937 106.385 50.6151L96.5 64.9752ZM88.1723 34.8605C91.3593 37.4064 94.1686 40.4242 96.5 43.8111C98.8314 40.4242 101.641 37.4064 104.828 34.8605C111.778 29.3084 120.524 26 130.025 26C152.655 26 171 44.7677 171 67.9189C171 80.0563 166.344 94.1182 156.968 106.266C147.592 118.413 96.5 167 96.5 167C96.5 167 45.4078 118.413 36.032 106.266C26.6562 94.1182 22 80.0563 22 67.9189C22 44.7677 40.3451 26 62.975 26C72.4763 26 81.2223 29.3084 88.1723 34.8605Z'
    />
  </svg>
);
