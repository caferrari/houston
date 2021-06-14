import * as React from 'react';

import { sizeMap } from '../utils/getIconSize';

export default ({ width = sizeMap.small }) => (
  <svg width={width} viewBox='0 0 192 192' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
    <path d='M32 96H74C79.5228 96 84 100.477 84 106V145C84 150.523 79.5228 155 74 155H52C40.9543 155 32 146.046 32 135V96Z' />
    <path d='M161 96H119C113.477 96 109 100.477 109 106V145C109 150.523 113.477 155 119 155H141C152.046 155 161 146.046 161 135V96Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M92 26H101C127.51 26 149 47.4903 149 74V123H109V135H149H161V123V74C161 40.8629 134.137 14 101 14H92C58.8629 14 32 40.8629 32 74V123V135H44H84V123H44V74C44 47.4903 65.4903 26 92 26Z'
    />
    <path d='M149 134C149 130.686 151.686 128 155 128C158.314 128 161 130.686 161 134V165C161 168.314 158.314 171 155 171C151.686 171 149 168.314 149 165V134Z' />
    <path d='M99 175C95.6863 175 93 172.314 93 169C93 165.686 95.6863 163 99 163H152C155.314 163 158 165.686 158 169C158 172.314 155.314 175 152 175L99 175Z' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M141.2 163C141.069 163.646 141 164.315 141 165C141 170.523 145.477 175 151 175C156.523 175 161 170.523 161 165C161 159.477 156.523 155 151 155C150.315 155 149.646 155.069 149 155.2V163H141.2Z'
    />
  </svg>
);
