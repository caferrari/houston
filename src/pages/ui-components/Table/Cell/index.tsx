import * as React from 'react';

import { cx } from '@emotion/css';
import { GridSize } from '@mui/material/Grid';
import { useContextSelector } from 'use-context-selector';

import styled, { IStyledProp } from '../../styles/styled';
import TableContext from '../context';

let cellKeyIncremeter = 0;

export interface ITableCellProps extends IStyledProp {
  id?: string;
  className?: string;
  colSpan?: number;
  columnLabel?: string;
  mobileSize?: GridSize | true | false | 0;
  mobileAlign?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  onClick?: () => void;
  onDoubleClick?: () => void;
  children?: React.ReactNode;
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
}

const TableCell = React.memo<ITableCellProps>(
  ({ children, className, mobileSize, mobileAlign, columnLabel, onClick, onDoubleClick, align, ...props }) => {
    const [cellKey] = React.useState(() => `cell-${++cellKeyIncremeter}`);
    const cellRef = React.useRef<HTMLTableCellElement>();

    const label = useContextSelector(TableContext, context => context.rowMapLabel[cellKey]);
    const tableSize = useContextSelector(TableContext, context => context.size);

    React.useEffect(() => {
      cellRef.current.setAttribute('cell-key', cellKey);
    }, [cellKey]);

    return (
      <td
        {...props}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        className={cx(
          className,
          tableSize === 'small' && '--small',
          className,
          `houston-cell-size-${mobileSize ?? 'auto'}`,
          `houston-cell-align-${align ?? 'left'}`,
          mobileAlign && `houston-cell-mobile-align-${mobileAlign}`
        )}
        ref={cellRef}
      >
        <span className='houston-table-label-mobile'>{columnLabel ?? label}</span>
        {children}
      </td>
    );
  }
);

export default styled(TableCell)`
  padding: 12px 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.grey[200]};
  font-size: ${({ theme }) => theme.textSize('normal')}px;
  color: ${({ theme }) => theme.colors.grey[600]};
  font-weight: ${({ theme }) => theme.fontWeight('regular')};
  line-height: ${({ theme }) => theme.lineHeight('normal')};

  & .--small {
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.textSize('small')}px;
  }
`;
