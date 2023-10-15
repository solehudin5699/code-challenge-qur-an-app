/* eslint-disable max-len */
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';
import './style.css';
import { cn } from '@/utils/className';

type FieldProps<T extends React.ComponentType<any>> = Omit<React.ComponentProps<T>, 'ref'> & {
  component: T;
  control?: Control<any>;
  externalError?: string;
  fieldClassName?: string;
  name: string;
  renderError?: (
    error?: FieldError | { [key: string]: FieldError },
    value?: any,
    externalError?: string
  ) => JSX.Element;
  shouldUnregister?: boolean;
};

function Field<T extends React.ComponentType<any>>(props: FieldProps<T>) {
  const { component, name, shouldUnregister, control, renderError, externalError, fieldClassName, ...restProps } =
    props;

  // Throw error if not provided name or component, or name & component is falsy
  if (!name || !component) {
    throw new Error('Field component requires "name" and "component" props.');
  }

  const generateError = (error: any) => {
    //error:{value:{message},label:{message}} for error select
    return error?.message || error?.value?.message || error?.label?.message || externalError;
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, ...restField }, fieldState: { invalid, error } }) => (
        <div className={cn('field w-full', fieldClassName)}>
          {React.createElement(component, {
            isError: (error && invalid) || externalError,
            ...restField,
            ...restProps,
            onChange: (e: any) => {
              onChange(e);
              restProps?.onChange?.(e);
            },
            onBlur: (e: any) => {
              onBlur();
              restProps?.onBlur?.(e);
            },
          })}
          {(externalError || (error && invalid)) &&
            (renderError?.(error, restField.value, externalError) || (
              <div className="error-message">{generateError(error)}</div>
            ))}
        </div>
      )}
      shouldUnregister={shouldUnregister}
    />
  );
}

Field.defaultProps = {
  control: undefined,
  externalError: undefined,
  fieldClassName: undefined,
  renderError: undefined,
  shouldUnregister: false,
};

export default Field;
