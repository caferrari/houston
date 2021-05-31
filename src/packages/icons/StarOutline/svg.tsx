import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96 43.1919L84.5875 69.0727C81.903 75.1604 76.2291 79.6511 69.34 80.5055L41.1508 84.0015L62.367 104.524C67.2055 109.205 69.2338 115.996 68.0072 122.453L62.514 151.371L86.3864 137.393C92.3371 133.909 99.6629 133.909 105.614 137.393L129.486 151.371L123.993 122.453C122.766 115.996 124.795 109.205 129.633 104.524L150.849 84.0015L122.66 80.5055C115.771 79.6511 110.097 75.1604 107.413 69.0727L96 43.1919ZM102.6 28.4186C100.002 22.5271 91.9975 22.5271 89.3996 28.4186L73.6076 64.231C72.5488 66.6321 70.3734 68.2854 67.863 68.5967L30.4217 73.2402C24.2623 74.0042 21.7886 81.9676 26.3425 86.3727L54.0238 113.149C55.8797 114.945 56.7107 117.62 56.218 120.213L48.87 158.896C47.6612 165.259 54.1373 170.181 59.5497 167.012L92.4496 147.748C94.6555 146.457 97.3445 146.457 99.5503 147.748L132.45 167.012C137.863 170.181 144.339 165.259 143.13 158.896L135.782 120.213C135.289 117.62 136.12 114.945 137.976 113.149L165.658 86.3727C170.211 81.9676 167.738 74.0042 161.578 73.2402L124.137 68.5967C121.627 68.2854 119.451 66.6321 118.392 64.231L102.6 28.4186Z'
      fill='#546E7A'
    />
  </svg>
);
