import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import createUseStyles from '../../styles/createUseStyles';
import TableContext from '../context';
import SortLabel from './SortLabel';

export interface ITableColumnProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  width?: number;
  /**
   * Default `left`
   */
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  /**
   * Control of ordered columns
   * Default `false`
   */
  sortableField?: string;
}

const useStyles = createUseStyles(theme => ({
  root: {
    padding: '8px 20px',
    borderBottom: `1px solid ${theme.colors.grey[200]}`,

    '&.--collapse': {
      borderBottomColor: theme.colors.grey[300]
    }
  },

  rootSmall: {
    padding: '8px 12px'
  }
}));

const TableColumn = React.memo<ITableColumnProps>(({ sortableField, children, className, align, ...rest }) => {
  const registerColumn = useContextSelector(TableContext, context => context.registerColumn);
  const onSort = useContextSelector(TableContext, context => context.onSort);
  const sort = useContextSelector(TableContext, context => context.sort);
  const loading = useContextSelector(TableContext, context => context.loading);
  const tableSize = useContextSelector(TableContext, context => context.size);
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  const classes = useStyles();

  const cellRef = React.useRef<HTMLTableCellElement>();

  const isSorted = sort?.field === sortableField;

  const handleSort = React.useCallback(() => {
    if (!onSort) {
      throw new Error('@eduzz/houston-ui: add the onSort prop to the Table to filter the fields');
    }

    onSort({
      field: sortableField,
      direction: !isSorted || sort?.direction === 'desc' ? 'asc' : 'desc'
    });
  }, [onSort, sortableField, isSorted, sort?.direction]);

  React.useEffect(() => {
    const unregister = registerColumn();
    return () => unregister();
  }, [registerColumn]);

  return (
    <th
      ref={cellRef}
      className={cx(
        classes.root,
        tableSize === 'small' && classes.rootSmall,
        className,
        `houston-column-align-${align ?? 'left'}`,
        isCollapseContent && '--collapse'
      )}
      {...rest}
    >
      <SortLabel
        sortable={!!sortableField && !isCollapseContent}
        active={isSorted}
        disabled={loading}
        direction={isSorted ? sort?.direction : 'asc'}
        onClick={handleSort}
      >
        {children}
      </SortLabel>
    </th>
  );
});

export default TableColumn;
