import * as React from 'react';

import styled, { IStyledProp } from '@eduzz/houston-styles';

import nestedComponent from '../utils/nestedComponent';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Text from './Text';

export interface IListProps extends IStyledProp {
  id?: string;
  stripedRows?: boolean;
  children: React.ReactNode;
}

const List = ({ children, id, className }: IListProps) => {
  return (
    <ul role='list' className={className} id={id}>
      {children}
    </ul>
  );
};

const ListWrapper = React.memo(styled(List, { label: 'houston-list' })());

export default nestedComponent(React.memo(ListWrapper), {
  Item,
  Text,
  Left,
  Right
});
