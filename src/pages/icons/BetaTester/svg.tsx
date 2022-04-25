import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M55.5586 31.5417C55.5586 27.3765 59.1798 24 63.6467 24H128.352C132.819 24 136.44 27.3765 136.44 31.5417C136.44 35.7068 132.819 39.0833 128.352 39.0833H63.6467C59.1798 39.0833 55.5586 35.7068 55.5586 31.5417Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M79.8237 91.1083L40.0687 155.979H151.931L112.176 91.1083L112.176 39.0833H79.8237V91.1083ZM155.389 161.621C155.387 161.619 155.386 161.616 155.385 161.614L155.389 161.621ZM124.308 27.7708L124.308 88.1041L165.922 156.008C169.004 161.036 165.11 167.292 158.9 167.292H33.1001C26.8898 167.292 22.9965 161.036 26.0776 156.008L67.6916 88.1041V27.7708H124.308Z'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M44.3111 140.646L91.7333 90.1458H122.533L160.667 156.146H36L44.3111 140.646ZM85.866 137.646C85.866 142.064 82.3639 145.646 78.0438 145.646C73.7237 145.646 70.2215 142.064 70.2215 137.646C70.2215 133.228 73.7237 129.646 78.0438 129.646C82.3639 129.646 85.866 133.228 85.866 137.646ZM104.445 126.646C112.006 126.646 118.134 120.378 118.134 112.646C118.134 104.914 112.006 98.6456 104.445 98.6456C96.8852 98.6456 90.7565 104.914 90.7565 112.646C90.7565 120.378 96.8852 126.646 104.445 126.646Z'
    />
  </svg>
);
