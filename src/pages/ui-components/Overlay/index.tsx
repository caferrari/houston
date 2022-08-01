import * as React from 'react';

import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

import useScrollBlock from '../hooks/useScrollBlock';

export type OverlayColor = 'low' | 'high';

export interface OverlayProps {
  children?: React.ReactNode;
  visible: boolean;
  /**
   * Default `low`
   */
  color?: OverlayColor;
  underTopbar?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Overlay = ({ className, visible, color = 'low', children, underTopbar, ...rest }: OverlayProps & StyledProp) => {
  const { disableScroll, enableScroll } = useScrollBlock();

  React.useEffect(() => {
    if (visible) {
      disableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [enableScroll, disableScroll, visible]);

  return (
    <div
      aria-hidden='true'
      tabIndex={-1}
      className={cx(className, {
        '--hts-visible': visible,
        '--hts-color-high': color === 'high',
        '--hts-under-topbar': underTopbar
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

export default styled(Overlay, {
  label: 'houston-overlay'
})(
  ({ theme }) => css`
    background: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[6])};
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 106;
    opacity: ${theme.opacity.level[0]};
    visibility: hidden;
    inset: 0;
    backdrop-filter: blur(${theme.pxToRem(8)}rem);

    &.--hts-color-high {
      background: ${theme.hexToRgba(theme.neutralColor.high.pure, theme.opacity.level[6])};
    }

    &.--hts-visible {
      opacity: 1;
      visibility: visible;
    }

    &.--hts-under-topbar {
      z-index: 104;
    }
  `
);
