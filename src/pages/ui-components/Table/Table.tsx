import * as React from 'react';

import styled, { cx, css, StyledProp } from '@eduzz/houston-styles';

import TableContext, { TableContextProps, TableRow } from './context';

let rowKeyIncremeter = 0,
  tablePortalIncremeter = 0;

export interface TableProps extends StyledProp, React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;

  size?: 'sm' | 'md';
  minWidth?: number;

  loading?: boolean;
  loadingText?: React.ReactNode;

  error?: any;
  errorFormater?: (error: any) => string;
  errorOnRetry?: () => void;

  total?: number;
  emptyText?: string;
}

const Table = ({
  size = 'md',
  children,
  className,
  minWidth,
  loading,
  loadingText = 'Carregando...',

  error,
  errorFormater,
  errorOnRetry,

  total,
  emptyText = 'Nenhum dado encontrado',
  ...tableProps
}: TableProps) => {
  const scroller = React.useRef<HTMLDivElement>(null);

  const [paginationPortal] = React.useState(() => `hts-table__pagination-${++tablePortalIncremeter}`);

  const [rows, setRows] = React.useState<TableRow[]>([]);
  const registerRow = React.useCallback((row: Omit<TableRow, 'key'>) => {
    const key = `table-row-${++rowKeyIncremeter}`;
    setRows(rows => [...rows, { key, ...row }]);
    return () => setRows(rows => rows.filter(r => r.key !== key));
  }, []);

  const hasCollapseInRows = React.useMemo(() => rows?.some(r => r.hasCollapse), [rows]);
  const hasActionInRows = React.useMemo(() => rows?.some(r => r.hasActions), [rows]);

  const contextValue = React.useMemo<TableContextProps>(
    () => ({
      rows,
      registerRow,
      hasCollapseInRows,
      hasActionInRows,
      paginationPortal,
      loading,
      loadingText,
      error,
      errorFormater,
      errorOnRetry,
      total,
      emptyText
    }),
    [
      rows,
      registerRow,
      hasCollapseInRows,
      hasActionInRows,
      paginationPortal,
      loading,
      loadingText,
      error,
      errorFormater,
      errorOnRetry,
      total,
      emptyText
    ]
  );

  React.useLayoutEffect(() => {
    let wait = false;
    let previousState = false;
    let timeout: ReturnType<typeof setTimeout>;
    const checkResize = () => {
      clearTimeout(timeout);

      if (wait) {
        setTimeout(() => checkResize(), 200);
        return;
      }

      wait = true;

      const hasScroll = (scroller.current?.scrollWidth ?? 0) > (scroller.current?.clientWidth ?? 0);
      const scrollLeft = scroller.current?.scrollLeft ?? 0;
      const totalScroll = (scroller.current?.scrollWidth ?? 0) - (scroller.current?.clientWidth ?? 0) - 10;
      const scrolledToEnd = scrollLeft >= totalScroll;

      const apply = hasScroll && !scrolledToEnd;

      if (apply !== previousState) {
        previousState = apply;
        apply
          ? scroller.current?.parentElement?.classList.add('--hts-scrollable')
          : scroller.current?.parentElement?.classList.remove('--hts-scrollable');
      }

      setTimeout(() => (wait = false), 200);
    };

    checkResize();
    window.addEventListener('resize', checkResize);
    scroller.current?.addEventListener('scroll', checkResize);

    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, []);

  return (
    <TableContext.Provider value={contextValue}>
      <div className={cx(className, `--hts-table-size-${size}`)}>
        <div className='hts-table__scroller-shadow'>
          <div className='hts-table__scroller'>
            <div ref={scroller}>
              <table {...tableProps} style={{ minWidth }}>
                {children}
              </table>
            </div>
          </div>
        </div>
        <div id={paginationPortal} />
      </div>
    </TableContext.Provider>
  );
};

export default styled(React.memo(Table), { label: 'houston-table' })(
  ({ theme }) => css`
    & > .hts-table__scroller-shadow {
      position: relative;
      overflow: hidden;

      & > .hts-table__scroller {
        &:before {
          content: ' ';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 1px;
          transition: 0.15s;
        }

        &.--hts-scrollable:before {
          box-shadow: ${theme.shadow.level[2]};
        }

        & > div {
          overflow: auto;
        }
      }

      & > .hts-table__scroller > div > table {
        width: 100%;
        border-spacing: 0px;

        & > thead {
          & > tr > th {
            background-color: ${theme.neutralColor.high.light};

            &:first-of-type {
              border-top-left-radius: ${theme.border.radius.sm};
            }

            &:last-of-type {
              border-top-right-radius: ${theme.border.radius.sm};
            }

            &.hts-table__column {
              font-weight: ${theme.font.weight.bold};

              &:not([align]) {
                text-align: left;
              }

              & .hts-table__column-sort {
                display: inline-flex;
                align-items: center;
                cursor: pointer;

                & > .hts-table__column-sort-icon {
                  transition: 0.2s linear;
                }

                &.--hts-sort-rev > .hts-table__column-sort-icon {
                  transform: rotateX(-180deg);
                }
              }

              &.--hts-disabled {
                color: ${theme.neutralColor.low.light};

                & .hts-table__column-sort {
                  cursor: not-allowed;
                }
              }
            }
          }

          &.--hts-action-column-hidden > tr > th:nth-last-child(2) {
            border-top-right-radius: ${theme.border.radius.sm};
          }
        }

        & > tbody > tr > td.hts-table__cell {
          font-weight: ${theme.font.weight.regular};
        }

        & > thead > tr > th.hts-table__column,
        & > tbody > tr > td.hts-table__cell,
        & > tbody > tr > td > .hts-table__loading-text {
          font-family: ${theme.font.family.base};
          font-size: ${theme.font.size.xxs};
          line-height: ${theme.line.height.xs};
          color: ${theme.neutralColor.low.dark};
        }

        & > thead > tr > th.hts-table__column,
        & > tbody > tr > td.hts-table__cell,
        & > tbody > tr > td.hts-table__cell-action,
        & > tbody > tr > td.hts-table__cell-collapse,
        & > tbody > tr > td > .hts-table__loading-text {
          padding: ${theme.spacing.inset.xs};
          border-bottom: ${theme.border.width.xs} solid
            ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
        }

        & > tbody > tr > td.hts-table__cell-action {
          padding: 0;
          text-align: right;

          & .hts-table__cell-action-menu {
            display: flex;
            flex-direction: column;
          }

          & .hts-table__cell-collapse-arrow {
            transition: 0.15s ease-out;

            &.--hts-active {
              transform: rotateX(180deg);
            }
          }
        }

        & > tbody > tr > td.hts-table__cell-collapse {
          padding: 0;
          text-align: center;
        }

        & > thead > tr > th.--hts-hidden,
        & > tbody > tr > td.--hts-hidden {
          display: none;
        }

        & > tbody > tr > td.hts-table__collapse {
          transition: 0.3s;

          &:not(.--hts-no-background) {
            background-color: ${theme.neutralColor.high.light};
          }

          &.--hts-opened:not(.--hts-no-padding) {
            padding: ${theme.spacing.xxxs};
          }
        }
      }
    }

    & .hts-table__pagination {
      padding: ${theme.spacing.inset.xxs};
      background-color: ${theme.neutralColor.high.light};
      border-bottom-left-radius: ${theme.border.radius.sm};
      border-bottom-right-radius: ${theme.border.radius.sm};
    }

    &.--hts-table-size-sm {
      & > .hts-table__scroller-shadow > .hts-table__scroller > div > table {
        & > thead > tr > th.hts-table__column,
        & > tbody > tr > td.hts-table__cell,
        & > tbody > tr > td.hts-table__cell-action,
        & > tbody > tr > td.hts-table__cell-collapse,
        & > tbody > tr > td > .hts-table__loading-text {
          padding: ${theme.spacing.squish.xxs};
        }
      }
    }
  `
);
