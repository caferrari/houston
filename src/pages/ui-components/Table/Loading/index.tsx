import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useContextSelector } from 'use-context-selector';

import styled, { cx, StyledProp } from '@eduzz/houston-styles/styled';

import Typography from '../../Typography';
import TableContext from '../context';

export interface TableLoadingProps extends StyledProp {
  text: React.ReactNode;
}
const TableLoading = React.memo<TableLoadingProps>(({ text, className }) => {
  const isCollapseContent = useContextSelector(TableContext, context => context.isCollapseContent);

  return (
    <tr className={cx(className, 'houston-table-loader')}>
      <td align='center' colSpan={1000}>
        {!isCollapseContent && (
          <>
            <LinearProgress />

            <Typography size='xs' weight='regular' lineHeight='xl' className='__text'>
              {text}
            </Typography>
          </>
        )}

        {isCollapseContent && (
          <div className='__text'>
            <CircularProgress size={32} />
          </div>
        )}
      </td>
    </tr>
  );
});

export default styled(TableLoading)`
  & > td > .__text {
    padding: ${({ theme }) => theme.spacing.xxs};
  }
`;
