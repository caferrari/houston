import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.medium }) => (
  <svg width={width} viewBox='0 0 192 192' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M86.9375 100.266V96.7969C86.9375 93.7969 87.5781 91.1875 88.8594 88.9688C90.1406 86.75 92.4844 84.3906 95.8906 81.8906C99.1719 79.5469 101.328 77.6406 102.359 76.1719C103.422 74.7031 103.953 73.0625 103.953 71.25C103.953 69.2188 103.203 67.6719 101.703 66.6094C100.203 65.5469 98.1094 65.0156 95.4219 65.0156C90.7344 65.0156 85.3906 66.5469 79.3906 69.6094L74.2812 59.3438C81.25 55.4375 88.6406 53.4844 96.4531 53.4844C102.891 53.4844 108 55.0312 111.781 58.125C115.594 61.2188 117.5 65.3438 117.5 70.5C117.5 73.9375 116.719 76.9062 115.156 79.4062C113.594 81.9062 110.625 84.7188 106.25 87.8438C103.25 90.0625 101.344 91.75 100.531 92.9062C99.75 94.0625 99.3594 95.5781 99.3594 97.4531V100.266H86.9375ZM85.4375 116.297C85.4375 113.672 86.1406 111.688 87.5469 110.344C88.9531 109 91 108.328 93.6875 108.328C96.2812 108.328 98.2812 109.016 99.6875 110.391C101.125 111.766 101.844 113.734 101.844 116.297C101.844 118.766 101.125 120.719 99.6875 122.156C98.25 123.562 96.25 124.266 93.6875 124.266C91.0625 124.266 89.0312 123.578 87.5938 122.203C86.1562 120.797 85.4375 118.828 85.4375 116.297Z'
      fill='#546E7A'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M96 142C131.037 142 157 116.999 157 89C157 61.0005 131.037 36 96 36C60.9632 36 35 61.0005 35 89C35 101.779 40.4081 113.933 49.6186 123.371C48.3424 127.239 46.8483 131.753 45.4648 135.907C45.4607 135.904 45.4566 135.9 45.4525 135.897L44.7984 137.906C42.8229 143.823 41.2049 148.6 41 149L65.9277 135.151C74.6785 139.483 84.8824 142 96 142ZM96 154C136.317 154 169 124.899 169 89C169 53.1015 136.317 24 96 24C55.6832 24 23 53.1015 23 89C23 102.809 27.836 115.612 36.0823 126.14C35.9462 126.41 35.8288 126.694 35.7322 126.99L25.4473 158.58C24.4214 161.731 26.1441 165.117 29.295 166.143C30.5501 166.551 31.8426 166.524 33.0083 166.144C33.779 166.066 34.5472 165.836 35.2702 165.443L65.7298 148.868C65.9686 148.738 66.195 148.594 66.4087 148.438C75.4535 152.013 85.4662 154 96 154Z'
      fill='#546E7A'
    />
  </svg>
);
