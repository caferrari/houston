import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='#546E7A' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M157 90C157 117.999 131.037 143 96 143C84.8824 143 74.6785 140.483 65.9277 136.151L41 150C41.2049 149.6 42.8229 144.823 44.7984 138.906L45.4525 136.897L45.4648 136.907C46.8483 132.753 48.3424 128.239 49.6186 124.371C40.4081 114.933 35 102.779 35 90C35 62.0005 60.9632 37 96 37C131.037 37 157 62.0005 157 90ZM169 90C169 125.899 136.317 155 96 155C85.4662 155 75.4535 153.013 66.4087 149.438C66.195 149.594 65.9686 149.738 65.7298 149.868L35.2702 166.443C34.5472 166.836 33.779 167.066 33.0083 167.144C31.8426 167.524 30.5501 167.551 29.295 167.143C26.1441 166.117 24.4214 162.731 25.4473 159.58L35.7322 127.99C35.8288 127.694 35.9462 127.41 36.0823 127.14C27.836 116.612 23 103.809 23 90C23 54.1015 55.6832 25 96 25C136.317 25 169 54.1015 169 90Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M55 66C55 62.6863 57.6863 60 61 60H129C132.314 60 135 62.6863 135 66C135 69.3137 132.314 72 129 72H61C57.6863 72 55 69.3137 55 66Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M56 90C56 86.6863 58.6863 84 62 84L113 84C116.314 84 119 86.6863 119 90C119 93.3137 116.314 96 113 96L62 96C58.6863 96 56 93.3137 56 90Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M55 114C55 110.686 57.6863 108 61 108H129C132.314 108 135 110.686 135 114C135 117.314 132.314 120 129 120H61C57.6863 120 55 117.314 55 114Z'
    />
  </svg>
);
