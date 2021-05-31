import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M88.5147 172C89.5166 172 90.461 171.754 91.2913 171.32C92.2147 171.045 93.0848 170.543 93.814 169.814L108.441 155.187C109.184 154.443 109.692 153.553 109.963 152.61C110.33 151.84 110.538 150.978 110.543 150.068L110.957 77.0597L156.774 31.2426C159.117 28.8995 159.117 25.1005 156.774 22.7573C156.591 22.5741 156.399 22.4052 156.199 22.2506C155.1 20.8786 153.41 20 151.515 20H41.5147C39.9678 20 38.5576 20.5854 37.4936 21.5468C36.8647 21.8358 36.2754 22.2393 35.7574 22.7574C33.4142 25.1005 33.4142 28.8995 35.7574 31.2426L82.5147 78V166C82.5147 169.314 85.201 172 88.5147 172Z'
      fill='#546E7A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M41.0147 20C39.5964 20 38.3045 20.5362 37.3288 21.4178L37.2719 21.4691L37.2023 21.5011C36.6265 21.7657 36.0864 22.1354 35.6109 22.6109C33.463 24.7588 33.463 28.2412 35.6109 30.3891L82.5147 77.2929V165.5C82.5147 168.538 84.9771 171 88.0147 171C88.9339 171 89.7991 170.775 90.5596 170.377L90.6023 170.355L90.6484 170.341C91.4942 170.089 92.2914 169.629 92.9604 168.96L107.587 154.333C108.269 153.651 108.734 152.836 108.983 151.972L108.994 151.932L109.012 151.895C109.348 151.189 109.538 150.4 109.543 149.565L109.958 76.3514L155.921 30.3891C158.069 28.2412 158.069 24.7588 155.921 22.6109C155.752 22.4426 155.576 22.2876 155.393 22.1459L155.346 22.1096L155.309 22.0633C154.3 20.8046 152.752 20 151.015 20H41.0147ZM36.7154 20.6248C37.8609 19.614 39.3667 19 41.0147 19H151.015C153.047 19 154.861 19.9329 156.052 21.3918C156.252 21.5492 156.444 21.7199 156.628 21.9038C159.166 24.4422 159.166 28.5578 156.628 31.0962L110.956 76.7679L110.543 149.571C110.537 150.541 110.319 151.462 109.932 152.288C109.635 153.296 109.089 154.246 108.294 155.04L93.6676 169.667C92.8903 170.444 91.9641 170.984 90.9802 171.286C90.0906 171.742 89.082 172 88.0147 172C84.4249 172 81.5147 169.09 81.5147 165.5V77.7071L34.9038 31.0962C32.3654 28.5578 32.3654 24.4422 34.9038 21.9038C35.4453 21.3623 36.0595 20.9357 36.7154 20.6248Z'
      fill='#546E7A'
    />
  </svg>
);
