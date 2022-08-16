import styled, { css, StyledProp, cx } from '@eduzz/houston-styles';

import Typography, { TypographyProps } from '../Typography';
import ProgressBar from './Bar';

export type ProgressFormat = 'percentage' | 'text';

export type ProgressInfoPosition = 'left' | 'right';

export interface ProgressProps {
  /**
   * Bar fill percentage
   */
  value: number;
  /**
   * @default 100
   */
  max?: number;
  /**
   * @default 0
   */
  min?: number;
  /**
   * Display quantity filled. Warning, information is only displayed when no label is filled
   * @default true
   */
  showInfo?: boolean;
  /**
   * Current value position
   * @default 'left'
   */
  infoPosition?: ProgressInfoPosition;
  /**
   * If `text`, the % symbol will not render
   * @default 'percentage'
   */
  format?: ProgressFormat;
  labelTopStart?: React.ReactNode;
  labelTopEnd?: React.ReactNode;
  labelBottomStart?: React.ReactNode;
  labelBottomEnd?: React.ReactNode;
}

const MIN_WIDTH_WHEN_LABEL = 160;
const MIN_WIDTH_DEFAULT = 88;

const Progress = ({
  className,
  value,
  max = 100,
  min = 0,
  format = 'percentage',
  showInfo: showInfoProp = true,
  infoPosition = 'left',
  labelTopStart,
  labelTopEnd,
  labelBottomStart,
  labelBottomEnd,
  ...rest
}: ProgressProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  const percentage = Math.round(((value - min) * 100) / (max - min));

  const hasLabel = !!labelTopStart || !!labelTopEnd || !!labelBottomStart || !!labelBottomEnd;
  const hasLabelTop = !!labelTopStart || !!labelTopEnd;
  const hasLabelBottom = !!labelBottomStart || !!labelBottomEnd;
  const showInfo = showInfoProp && !hasLabel;

  const typographyLabelProps: TypographyProps = {
    size: 'xxs',
    lineHeight: 'xs'
  };

  return (
    <div className={cx(className, { '--hst-progress-hasLabel': hasLabel })} {...rest}>
      {hasLabelTop && (
        <div
          className={cx('hst-progress-label__top', {
            '--hst-progress-label-top-right': !!!labelTopStart && !!labelTopEnd
          })}
        >
          {!!labelTopStart && <Typography {...typographyLabelProps}>{labelTopStart}</Typography>}
          {!!labelTopEnd && <Typography {...typographyLabelProps}>{labelTopEnd}</Typography>}
        </div>
      )}

      <div className='hst-progress__wrapper'>
        {showInfo && (
          <div className={cx('hst-progress__percent', { '--hst-progress-percent-right': infoPosition === 'right' })}>
            <Typography size='xxs' lineHeight='xs'>
              {percentage}
              {format === 'percentage' && '%'}
            </Typography>
          </div>
        )}

        <ProgressBar value={percentage} min={min} max={max} />
      </div>

      {hasLabelBottom && (
        <div
          className={cx('hst-progress-label__bottom', {
            '--hst-progress-label-bottom-right': !!!labelBottomStart && !!labelBottomEnd
          })}
        >
          {!!labelBottomStart && <Typography {...typographyLabelProps}>{labelBottomStart}</Typography>}
          {!!labelBottomEnd && <Typography {...typographyLabelProps}>{labelBottomEnd}</Typography>}
        </div>
      )}
    </div>
  );
};

const ProgressWrapper = styled(Progress, { label: 'hst-progress' })`
  ${({ theme }) => css`
    min-width: ${theme.pxToRem(MIN_WIDTH_DEFAULT)}rem;

    &.--hst-progress-hasLabel {
      min-width: ${theme.pxToRem(MIN_WIDTH_WHEN_LABEL)}rem;
    }

    & > .hst-progress-label__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: ${theme.spacing.inline.quarck};

      &.--hst-progress-label-top-right {
        justify-content: flex-end;
      }
    }

    & > .hst-progress__wrapper {
      display: flex;
      align-items: center;

      & > .hst-progress__percent {
        order: 0;
        margin-right: ${theme.spacing.inline.quarck};

        &.--hst-progress-percent-right {
          order: 1;
          margin-left: ${theme.spacing.inline.quarck};
          margin-right: 0;
        }
      }
    }

    & > .hst-progress-label__bottom {
      display: flex;
      justify-content: space-between;
      margin-top: ${theme.spacing.inline.quarck};

      &.--hst-progress-label-bottom-right {
        justify-content: flex-end;
      }
    }
  `}
`;

export default ProgressWrapper;
