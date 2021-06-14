import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M22 161.487C18.6863 161.487 16 158.801 16 155.487L16 39.4834C16 36.1697 18.6863 33.4834 22 33.4834C25.3137 33.4834 28 36.1697 28 39.4834L28 155.487C28 158.801 25.3137 161.487 22 161.487Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M169.5 161.485C166.186 161.485 163.5 158.799 163.5 155.485V58.4852C163.5 55.1715 166.186 52.4852 169.5 52.4852C172.814 52.4852 175.5 55.1715 175.5 58.4852V155.485C175.5 158.799 172.814 161.485 169.5 161.485Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.5 155.485C16.5 152.172 19.1863 149.485 22.5 149.485L167.5 149.485C170.814 149.485 173.5 152.172 173.5 155.485C173.5 158.799 170.814 161.485 167.5 161.485L22.5 161.485C19.1863 161.485 16.5 158.799 16.5 155.485Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.5 39.4852C16.5 36.1715 19.1863 33.4852 22.5 33.4852H94.5C97.8137 33.4852 100.5 36.1715 100.5 39.4852C100.5 42.7989 97.8137 45.4852 94.5 45.4852H22.5C19.1863 45.4852 16.5 42.7989 16.5 39.4852Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M90.7427 35.2426C93.0859 32.8995 96.8848 32.8995 99.228 35.2426L116.743 52.7574C119.086 55.1005 119.086 58.8995 116.743 61.2426C114.4 63.5858 110.601 63.5858 108.257 61.2426L90.7427 43.7279C88.3996 41.3848 88.3996 37.5858 90.7427 35.2426Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M107.5 57.4852C107.5 54.1715 110.186 51.4852 113.5 51.4852H169.5C172.814 51.4852 175.5 54.1715 175.5 57.4852C175.5 60.7989 172.814 63.4852 169.5 63.4852H113.5C110.186 63.4852 107.5 60.7989 107.5 57.4852Z'
    />
  </svg>
);
