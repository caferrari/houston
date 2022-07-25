import ArrowRight from '@eduzz/houston-icons/ArrowRight';
import styled, { css, cx, StyledProp } from '@eduzz/houston-styles';

export interface LinkProps extends StyledProp, React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Allow to provide more props to the `as` Component
   */
  [key: string]: any;
  /**
   * Component that wraps the item.
   * @example NavLink, Link (react-router-dom)
   */
  as?: React.ElementType;
  /**
   * Redirect path.
   */
  href?: string;
  showIcon?: boolean;
  /**
   * Defaults to 'inherit'
   */
  size?: 'sm' | 'md' | 'inherit';
  children: React.ReactNode;
}

const Link = ({ as: Tag = 'a', className, showIcon, size = 'inherit', children, ...rest }: LinkProps) => (
  <Tag tabIndex={0} className={cx(className, `--${size}`)} {...rest}>
    {children}
    {showIcon && <ArrowRight size={size === 'inherit' ? 'sm' : size} />}
  </Tag>
);

export default styled(Link, { label: 'houston-tag-link' })(({ theme }) => {
  return css`
    all: unset;
    line-height: ${theme.line.height.default};
    display: inline-flex;
    align-items: center;
    text-decoration: underline;
    gap: ${theme.spacing.inline.nano};
    border-radius: ${theme.border.radius.xs};
    cursor: pointer;

    &.--sm {
      font-size: ${theme.font.size.xs};
    }

    &.--md {
      font-size: ${theme.font.size.sm};
    }

    &.--inherit {
      font-size: inherit;
    }

    :not(:focus) {
      transition: 0.3s;
    }

    :hover {
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[7])};
    }

    :visited {
      color: ${theme.hexToRgba(theme.neutralColor.low.pure, theme.opacity.level[8])};
    }

    :focus {
      outline: ${theme.border.width.sm} solid ${theme.feedbackColor.informative.pure};
      outline-offset: ${theme.spacing.inset.xxxs};
    }
  `;
});
