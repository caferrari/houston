import * as React from 'react';

import { cx } from '@emotion/css';
import { useContextSelector } from 'use-context-selector';

import CancelIcon from '@eduzz/houston-icons/Cancel';
import MenuLeft from '@eduzz/houston-icons/MenuLeft';
import styled, { css, StyledProp, breakpoints } from '@eduzz/houston-styles';
import useHoustonTheme from '@eduzz/houston-styles/useHoustonTheme';

import Typography from '../../Typography';
import nestedComponent from '../../utils/nestedComponent';
import LayoutContext, { TOPBAR_HEIGHT } from '../context';
import Action from './Action';
import Apps from './Apps';
import Belt from './Belt';
import TopbarContext, { TopbarContextType } from './context';
import UnitySupportChat from './UnitySupportChat';
import User from './User';
import UserMenu from './UserMenu';
import UserMenuDivider from './UserMenu/Divider';
import UserMenuItem from './UserMenu/Item';
import UserMenuGroup from './UserMenu/ItemGroup';

export interface TopbarProps extends StyledProp, React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disableApps?: boolean;
  logo?: string;
  logoMobile?: string;
  currentApplication?: string;
  blackMode?: boolean;
  user?: {
    id?: number;
    name: string;
    email?: string;
    avatar?: string;
    belt?: string;
    tag?: 'lite' | 'pro' | 'unity' | 'partner';
    isSupport?: boolean;
    supportId?: number;
  };
}

const Topbar = React.memo<TopbarProps>(
  ({ children, currentApplication, logo, logoMobile, className, blackMode, user, disableApps, ...rest }) => {
    const theme = useHoustonTheme();
    const register = useContextSelector(LayoutContext, context => context.topbar.register);
    const sidebarToogleOpened = useContextSelector(LayoutContext, context => context.sidebar.toogleOpened);
    const sidebarOpened = useContextSelector(LayoutContext, context => context.sidebar.opened);

    React.useEffect(() => {
      const unregister = register();
      return () => unregister();
    }, [register]);

    React.useEffect(() => {
      document.body.classList.add('hst-topbar-applied');

      return () => {
        document.body.classList.remove('hst-topbar-applied');
      };
    }, [theme]);

    const contextValue = React.useMemo<TopbarContextType>(
      () => ({ currentApplication, user }),
      [currentApplication, user]
    );

    return (
      <TopbarContext.Provider value={contextValue}>
        <div className={cx(className, { 'hst-topbar-black-mode': blackMode })} {...rest}>
          <header className='hst-topbar-header'>
            <div className='hst-topbar-start'>
              <Action
                className='hst-topbar-mobile-menu'
                icon={sidebarOpened ? <CancelIcon size={24} /> : <MenuLeft size={24} />}
                onClick={sidebarToogleOpened}
              />

              {!disableApps && <Apps />}

              <div className='hst-topbar-logo'>
                <img
                  className='hst-topbar-logo-default'
                  src={logo ?? `//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz${blackMode ? '' : '-colored'}.svg`}
                />
                <img
                  className='hst-topbar-logo-mobile'
                  src={logoMobile ?? '//eduzz-houston.s3.amazonaws.com/topbar/logos/eduzz-mobile.svg'}
                />
              </div>

              {!!user?.tag && (
                <Typography
                  lineHeight='default'
                  color='inherit'
                  className={cx('hst-topbar-tag', `hst-topbar-tag-${user.tag}`)}
                  size='xs'
                >
                  {user.tag}
                </Typography>
              )}
            </div>

            <div className='hst-topbar-quick-access'>
              <Belt />

              {children}
              <User />
            </div>
          </header>
        </div>
      </TopbarContext.Provider>
    );
  }
);

const TopbarStyled = styled(Topbar, { label: 'hst-topbar' })(
  ({ theme }) => css`
    height: ${theme.pxToRem(TOPBAR_HEIGHT)}rem;

    & > .hst-topbar-header {
      font-family: ${theme.font.family.base};
      background-color: white;
      color: ${theme.neutralColor.low.pure};
      border-bottom: 3px solid ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[3])};
      box-sizing: border-box;
      position: fixed;
      padding: ${theme.spacing.squish.xxs};
      top: 0;
      left: 0;
      right: 0;
      height: ${theme.pxToRem(TOPBAR_HEIGHT)}rem;
      display: flex;
      justify-content: space-between;
      z-index: 105;
      transition: 0.15s ease-out;

      & > .hst-topbar-start {
        display: flex;
        align-items: center;

        & .hst-topbar-mobile-menu {
          cursor: pointer;

          ${breakpoints.up('lg')} {
            display: none;
          }
        }

        & .hst-topbar-logo {
          height: 80%;
          width: auto;
          margin-inline: ${theme.spacing.inline.nano};

          & > img {
            max-width: 100%;
            max-height: 100%;
            height: ${TOPBAR_HEIGHT}px;
          }

          & > .hst-topbar-logo-mobile {
            display: none;
          }

          ${breakpoints.down('sm')} {
            width: ${theme.pxToRem(32)}rem;

            & .hst-topbar-logo-default {
              display: none;
            }

            & .hst-topbar-logo-mobile {
              display: block;
            }
          }
        }

        .hst-topbar-tag {
          text-transform: capitalize;
          padding: ${theme.spacing.quarck};
          margin-top: 5px;
          letter-spacing: 0.5px;
          display: none;
          border-radius: 3px;
          margin-left: ${theme.spacing.nano};

          ${theme.breakpoints.up('sm')} {
            display: block;
          }

          &.hst-topbar-tag-pro {
            border: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
          }

          &.hst-topbar-tag-unity {
            border: ${theme.border.width.xs} solid ${theme.neutralColor.low.pure};
            background: ${theme.neutralColor.low.pure};
            color: white;
          }

          &.hst-topbar-tag-partner {
            background: ${theme.neutralColor.high.medium};
          }
        }
      }

      & > .hst-topbar-quick-access {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &.hst-topbar-black-mode > .hst-topbar-header {
      background-color: #272727;
      color: white;
    }
  `
);

export default nestedComponent(TopbarStyled, {
  Action,
  UnitySupportChat,
  UserMenu,
  UserMenuItem,
  UserMenuDivider,
  UserMenuGroup
});
