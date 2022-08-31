import * as React from 'react';

import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import { Placement } from '@popperjs/core';
import { useContextSelector } from 'use-context-selector';

import { StyledProp, cx } from '@eduzz/houston-styles';

import warning from '../utils/warning';
import PopoverContext from './context';

export interface PopoverProps extends StyledProp {
  targetRef: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
  fullWidth?: boolean;
  placement?: Placement;
  id?: string;
  variant?: 'tooltip';
  keepMounted?: boolean;
}

export interface PopoverRef {
  open(): void;
  close(): void;
}

const Popover = React.forwardRef<PopoverRef, PopoverProps>(
  ({ targetRef, children, className, fullWidth, placement, id, variant, keepMounted }, ref) => {
    const setState = useContextSelector(PopoverContext, context => context.setState);

    const [render, setRender] = React.useState(() => keepMounted ?? false);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const closeRef = React.useRef<() => void>();

    React.useImperativeHandle(
      ref,
      () => ({
        open() {
          if (!targetRef.current || !contentRef.current) {
            warning('Popover', 'needs a targetRef and contentRef');
            return;
          }

          setRender(true);

          closeRef.current = setState({
            opened: true,
            target: targetRef.current,
            content: contentRef.current,
            placement: placement ?? 'auto'
          });

          contentRef.current.style.width = fullWidth ? `${targetRef.current?.offsetWidth}px` : 'auto';
        },
        close() {
          !keepMounted && setRender(false);
          closeRef.current && closeRef.current();
        }
      }),
      [fullWidth, keepMounted, placement, setState, targetRef]
    );

    return (
      <div id={id} ref={contentRef} className={cx(className, 'popover')}>
        <div className={cx('__container', { [`--${variant}`]: !!variant })}>{render && children}</div>
      </div>
    );
  }
);

const showAnimation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const hideAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0; }
`;

export default styled(Popover, { label: 'houston-popover' })(
  ({ theme }) => css`
    box-sizing: border-box;
    max-width: 100vw;
    z-index: 1000;
    pointer-events: none;
    position: absolute;
    top: calc(100vh * -1000);
    left: calc(100vh * -1000);

    & > .__container {
      width: 100%;
      max-height: 50vh;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: white;
      box-shadow: ${theme.shadow.level[3]};
      border-radius: ${theme.border.radius.sm};
      box-sizing: border-box;
      transform-origin: top center;
      animation-duration: 0.2s;
      animation-name: ${hideAnimation};
      animation-fill-mode: forwards;

      &.--tooltip {
        overflow-y: unset;
        overflow-x: unset;
      }
    }

    &.--opened {
      pointer-events: auto;

      & > .__container {
        animation-name: ${showAnimation};
      }
    }
  `
);
