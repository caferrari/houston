/* eslint-disable no-restricted-imports */
import * as React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import TextFieldMUI, { TextFieldProps } from '@material-ui/core/TextField';

import IFormAdapter from '@eduzz/houston-core/formAdapter';
import IFormMask from '@eduzz/houston-core/maskAdapter';

import clsx from 'clsx';

import useMask from '../../hooks/useMask';
import WrapperTheme from '../../styles/ThemeProvider/WrapperTheme';
import { FormFieldsContext } from '../Form';

type FieldTextPropsExtends =
  | 'id'
  | 'label'
  | 'name'
  | 'disabled'
  | 'placeholder'
  | 'type'
  | 'fullWidth'
  | 'required'
  | 'helperText'
  | 'multiline'
  | 'rows'
  | 'className'
  | 'onKeyPress'
  | 'onKeyUp'
  | 'onKeyDown'
  | 'value';

export interface ITextFieldProps extends Pick<TextFieldProps, FieldTextPropsExtends> {
  loading?: boolean;
  errorMessage?: string;
  mask?: IFormMask;
  form?: IFormAdapter<any>;
  onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
  margin?: 'none' | 'dense' | 'normal';
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  onPressEnter?: (value: any) => any;
  maxLength?: number;
  size?: 'normal' | 'small';
}

const TextField = React.forwardRef<React.LegacyRef<HTMLInputElement>, ITextFieldProps>(
  (
    {
      form: formProps,
      mask,
      value,
      name,
      loading,
      onChange,
      onBlur,
      errorMessage: errorMessageProp,
      fullWidth,
      margin,
      endAdornment,
      startAdornment,
      maxLength,
      onPressEnter,
      className,
      size,
      ...props
    },
    ref
  ) => {
    const formContext = React.useContext(FormFieldsContext);
    const form = formProps ?? formContext;

    if (!name && form) {
      throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }

    value = form && name ? form.getFieldValue(name) : value;
    const { maskClean, maskedValue } = useMask(mask, value);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        let cleanValue = maskClean(e.currentTarget.value);

        if (maxLength) {
          cleanValue = (cleanValue as string).substring(0, maxLength);
        }

        onChange && onChange(cleanValue, e);
        form && form.setFieldValue(name, cleanValue);
      },
      [onChange, maskClean, form, name, maxLength]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
      },
      [onBlur, maskClean]
    );

    const inputLabelProps = React.useMemo<InputLabelProps>(
      () => ({
        ...(props.placeholder ? { shrink: true } : {})
      }),
      [props.placeholder]
    );

    const inputProps = React.useMemo(() => {
      let end = null;
      let start = null;

      if (endAdornment) {
        end = <InputAdornment position='end'>{endAdornment}</InputAdornment>;
      }

      if (startAdornment) {
        start = <InputAdornment position='start'>{startAdornment}</InputAdornment>;
      }

      if (loading) {
        end = (
          <InputAdornment position='end'>
            <CircularProgress color='secondary' size={20} />
          </InputAdornment>
        );
      }

      return {
        endAdornment: end,
        startAdornment: start
      };
    }, [loading, endAdornment, startAdornment]);

    const handlePressEnter = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;

        if (e.key === 'Enter') {
          e.preventDefault();
          onPressEnter(!form || !form?.getFieldValue ? maskClean(target.value) : form.getFieldValue(name));
        }
      },
      [form, name, onPressEnter, maskClean]
    );

    const errorMessage = errorMessageProp ?? form?.getFieldError(name);
    const hasError = !!errorMessage;

    return (
      <WrapperTheme>
        <TextFieldMUI
          error={hasError}
          {...props}
          disabled={form?.isSubmitting || props.disabled || loading}
          helperText={errorMessage || props.helperText}
          className={clsx(className, size === 'small' ? 'input-size-small' : null)}
          name={name}
          margin={margin ?? 'normal'}
          variant='outlined'
          value={maskedValue ?? ''}
          inputRef={ref}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth={fullWidth ?? true}
          InputLabelProps={inputLabelProps}
          InputProps={inputProps}
          onKeyPress={onPressEnter ? handlePressEnter : props.onKeyPress}
        />
      </WrapperTheme>
    );
  }
);

export default React.memo(TextField);
