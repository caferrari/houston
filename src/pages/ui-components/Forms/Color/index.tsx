import * as React from 'react';

import { HexColorPicker } from 'react-colorful';
import { useContextSelector } from 'use-context-selector';

import { cx } from '@eduzz/houston-styles';

import useOnClickOutside from '../../hooks/useClickOutside';
import { FormFieldsContext } from '../Form';
import TextField, { ITextFieldProps } from '../Text';
import useStyles from './styles';

type FieldTextPropsOmit = 'type' | 'multiline' | 'mask' | 'value' | 'onChange' | 'onBlur' | 'maxLength';

export interface IColorFieldProps extends Omit<ITextFieldProps, FieldTextPropsOmit> {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ColorField: React.FC<IColorFieldProps> = ({
  className,
  value,
  defaultValue,
  errorMessage: errorMessageProp,
  loading,
  name,
  onChange,
  disabled,
  ...props
}) => {
  const classes = useStyles();

  const pickerRef = React.useRef<HTMLDivElement>();

  const isSubmitting = useContextSelector(FormFieldsContext, context => context?.isSubmitting);
  const formValue = useContextSelector(FormFieldsContext, context => context?.getFieldValue(name));
  const formError = useContextSelector(FormFieldsContext, context => context?.getFieldError(name));
  const setFieldValue = useContextSelector(FormFieldsContext, context => context?.setFieldValue);

  if (!name && setFieldValue) {
    throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
  }

  value = formValue ?? value;

  const initialColor = value ? value : defaultValue ?? '';

  const [visible, setVisible] = React.useState<boolean>(false);
  const [color, setColor] = React.useState<string>(initialColor);

  const handleClickInput = React.useCallback(() => {
    if (!disabled && !loading) {
      setVisible(true);
    }
  }, [disabled, loading]);

  const handleChange = React.useCallback(
    (value: string) => {
      setColor(value);
      onChange && onChange(value);
      setFieldValue && setFieldValue(name, value);
    },
    [name, onChange, setFieldValue]
  );

  const errorMessage = errorMessageProp ?? formError;

  useOnClickOutside(
    pickerRef,
    () => {
      if (!visible) return;
      setVisible(false);
    },
    [visible]
  );

  return (
    <div className={cx(classes.root, className)}>
      <TextField
        {...props}
        disabled={isSubmitting || disabled || loading}
        helperText={errorMessage || props.helperText}
        name={name}
        onClick={handleClickInput}
        value={color}
      />

      <div ref={pickerRef} className={cx(classes.picker, visible && '--show')}>
        <HexColorPicker color={color} onChange={handleChange} />
      </div>
    </div>
  );
};

export default React.memo(ColorField);
