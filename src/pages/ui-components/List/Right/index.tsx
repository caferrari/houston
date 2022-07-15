import * as React from 'react';

import styled, { css, IStyledProp } from '@eduzz/houston-styles';

export interface ListRightProps extends IStyledProp, React.HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ListRight = ({ children, onClick, ...rest }: ListRightProps) => (
  <div onClick={onClick} {...rest}>
    {children}
  </div>
);

export default styled(ListRight, { label: 'houston-list-item-right' })(() => {
  return css`
    margin-left: auto;
  `;
});
