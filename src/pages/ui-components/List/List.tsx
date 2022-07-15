import * as React from 'react';

import styled, { cx, IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import ListContextProvider from './context';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

export interface IListProps extends IStyledProp, React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  /**
   * Default `false`
   */
  dividers?: boolean;
}

const List = ({ children, className, dividers = false, ...rest }: IListProps) => {
  return (
    <ListContextProvider dividers={dividers}>
      <ul role='list' className={cx(className, { '--dividers': dividers })} {...rest}>
        {children}
      </ul>
    </ListContextProvider>
  );
};

const ListWrapper = React.memo(styled(List, { label: 'houston-list' })`
  &.--dividers {
    hr:last-of-type {
      display: none;
    }
  }
`);

export default nestedComponent(ListWrapper, {
  Item,
  Text,
  Left,
  Right
});
