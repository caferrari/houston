import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M53 61C53 57.6863 55.7343 55 59.1071 55H160.893C164.266 55 167 57.6863 167 61C167 64.3137 164.266 67 160.893 67H59.1071C55.7343 67 53 64.3137 53 61Z' />
    <path d='M25 29C25 25.6863 27.6863 23 31 23H45C48.3137 23 51 25.6863 51 29C51 32.3137 48.3137 35 45 35H31C27.6863 35 25 32.3137 25 29Z' />
    <path d='M76 114C76 110.686 78.7677 108 82.1818 108H137.818C141.232 108 144 110.686 144 114C144 117.314 141.232 120 137.818 120H82.1818C78.7677 120 76 117.314 76 114Z' />
    <path d='M68 130C68 126.686 70.5584 124 73.7143 124H142.286C145.442 124 148 126.686 148 130C148 133.314 145.442 136 142.286 136H73.7143C70.5584 136 68 133.314 68 130Z' />
    <path d='M93 155C93 161.627 87.6274 167 81 167C74.3726 167 69 161.627 69 155C69 148.373 74.3726 143 81 143C87.6274 143 93 148.373 93 155Z' />
    <path d='M145 156C145 162.627 139.627 168 133 168C126.373 168 121 162.627 121 156C121 149.373 126.373 144 133 144C139.627 144 145 149.373 145 156Z' />
    <path d='M39.6773 31.8941C38.3375 28.885 39.7055 25.3529 42.7327 24.0051C45.7599 22.6573 49.3 24.0041 50.6398 27.0133L87.6811 110.209C89.0209 113.219 87.6529 116.751 84.6257 118.098C81.5985 119.446 78.0583 118.099 76.7186 115.09L39.6773 31.8941Z' />
    <path d='M167.357 64.3687C168.706 61.3379 167.346 57.7882 164.319 56.4404C161.292 55.0926 157.744 56.457 156.394 59.4879L133.41 111.112C132.06 114.143 133.42 117.693 136.448 119.041C139.475 120.388 143.023 119.024 144.372 115.993L167.357 64.3687Z' />
    <path d='M88.1505 113.114C89.1914 110.776 87.5811 107.788 84.5539 106.44C81.5267 105.093 78.2288 105.895 77.188 108.233L68.545 127.645C67.5041 129.983 69.1144 132.971 72.1416 134.319C75.1688 135.667 78.4667 134.864 79.5075 132.526L88.1505 113.114Z' />
  </svg>
);
