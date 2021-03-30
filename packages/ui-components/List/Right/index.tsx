import * as React from 'react';

export interface IListRightProps {
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLParagraphElement>;
  text?: string;
}

export default React.memo<IListRightProps>(() => null);
