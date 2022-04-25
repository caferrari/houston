import * as React from 'react';

import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp, cx } from '../../styles/styled';
import Typography from '../../Typography';
import TableContext from '../context';

export interface ITableEmptyProps extends IStyledProp {
  count: number;
  children?: React.ReactNode;
}
const TableEmpty = React.memo<ITableEmptyProps>(({ children, count, className }) => {
  const columnsLen = useContextSelector(TableContext, context => context.columns.length);

  if (count) return null;

  children = children ?? 'Nenhum dado encontrado';

  return (
    <tr className={cx(className, 'table-empty-message')}>
      <td align='center' colSpan={columnsLen}>
        {typeof children === 'string' ? (
          <Typography size='normal' fontWeight='regular' lineHeight='comfortable' className='__text'>
            {children}
          </Typography>
        ) : (
          children
        )}
      </td>
    </tr>
  );
});

export default styled(TableEmpty)`
  & > td > .__text {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;
