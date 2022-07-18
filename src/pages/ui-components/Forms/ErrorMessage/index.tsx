import * as React from 'react';

import { ErrorMessage as ErrorMessageHook } from '@hookform/error-message';
import { useFormState } from 'react-hook-form';

import Typography from '../../Typography';

export interface ErrorMessageProps {
  name: string;
  className?: string;
}

const ErrorMessage = ({ name, className }: ErrorMessageProps) => {
  const formState = useFormState({ name, exact: true });

  return (
    <ErrorMessageHook
      errors={formState.errors}
      name={name}
      render={({ message }) => <Typography className={className}>{message}</Typography>}
    />
  );
};

export default React.memo(ErrorMessage);
