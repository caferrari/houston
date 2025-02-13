import * as React from 'react';

export interface DropdownRootProps {
  children: React.ReactNode;
  arrow: boolean;
}

const DropdownRoot = ({ children, arrow, ...rest }: DropdownRootProps & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...rest}>
      {arrow && (
        <>
          <div id='hst-dropdown-arrow' data-popper-arrow />
        </>
      )}

      {children}
    </div>
  );
};

export default React.memo(DropdownRoot);
