import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M168.007 160C172.429 160 176.014 156.415 176.014 151.993V111.959C167.176 111.951 160.014 104.785 160.014 95.9452C160.014 87.1056 167.176 79.9389 176.014 79.9314L176.014 39.897C176.014 35.4749 172.429 31.8902 168.007 31.8902L23.8702 31.8901C19.4481 31.8901 15.8633 35.4749 15.8633 39.897L15.8633 79.9314C24.7011 79.9389 31.8633 87.1056 31.8633 95.9452C31.8633 104.785 24.7011 111.951 15.8633 111.959L15.8633 151.993C15.8633 156.415 19.4481 160 23.8701 160L168.007 160ZM116 60C116 55.5817 119.582 52 124 52C128.419 52 132 55.5817 132 60V68C132 72.4183 128.419 76 124 76C119.582 76 116 72.4183 116 68V60ZM116 92C116 87.5817 119.582 84 124 84C128.419 84 132 87.5817 132 92V100C132 104.418 128.419 108 124 108C119.582 108 116 104.418 116 100V92ZM116 124C116 119.582 119.582 116 124 116C128.419 116 132 119.582 132 124V132C132 136.418 128.419 140 124 140C119.582 140 116 136.418 116 132V124Z'
    />
  </svg>
);
