import styled, { css, StyledProp } from '@eduzz/houston-styles';
import Heading from '@eduzz/houston-ui/Typography/Heading';

export interface ShowcaseTitleProps {
  disableTypography?: boolean;
}

const Title = ({
  children,
  className,
  disableTypography
}: ShowcaseTitleProps & React.HTMLAttributes<HTMLDivElement> & StyledProp) => {
  if (disableTypography) {
    return <>{children}</>;
  }

  return (
    <Heading size='sm' as='h6' className={className} color='neutralColor.low.dark'>
      {children}
    </Heading>
  );
};

export default styled(Title, { label: 'hst-showcase-title' })`
  ${({ theme }) => css`
    padding: ${theme.spacing.inset.sm};
    padding-bottom: 0;
  `}
`;
