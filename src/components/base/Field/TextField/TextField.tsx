/* eslint-disable max-len */
import React, { startTransition, useEffect, useState } from 'react';
import { CrossIcon, EyeIcon, EyeSlashIcon } from '../../Icons';
import { Label } from '../../FormBase';
import { cn } from '@/utils/className';

export interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  caption?: string;
  className?: string;
  classNameLabel?: string;
  confirmChangeTypeInput?: (param: any) => void;
  customHideEye?: () => void;
  endAdornment?: React.ReactElement | string;
  isError?: boolean;
  label?: string;
  renderLabel?: () => React.ReactElement;
  showClearIcon?: boolean;
  startAdornment?: React.ReactElement | string;
  triggerHideEye?: number;
}

const TextField = React.forwardRef<HTMLInputElement, Props>(function Component(props, ref) {
  const {
    endAdornment,
    startAdornment,
    label,
    renderLabel,
    showClearIcon,
    className,
    caption,
    confirmChangeTypeInput,
    triggerHideEye,
    customHideEye,
    isError,
    required,
    classNameLabel,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const [isSecure, setSecured] = useState(rest.type === 'password');

  const isSecureInput = () => {
    if (rest.type === 'password') {
      return isSecure ? 'password' : 'text';
    } else {
      return rest.type;
    }
  };

  useEffect(() => {
    if (triggerHideEye && triggerHideEye > 0) {
      setSecured(true);
    }
  }, [triggerHideEye]);

  const handleClearField = () => {
    rest.onChange?.({ target: { value: '' } } as any);
  };

  const renderLabelInput = (
    <div>
      {renderLabel ? (
        renderLabel()
      ) : (
        <Label className={cn('mb-1 block', classNameLabel)} id={rest?.id || rest?.name} required={required}>
          {label}
        </Label>
      )}
    </div>
  );

  return (
    <div className={cn('w-full flex flex-col')}>
      {(label || renderLabel) && renderLabelInput}
      <div
        className={cn(
          'w-full h-11 rounded-xl overflow-hidden flex border border-tertiary-300 items-center',
          {
            '!border-[#2970FF]': focused,
            'bg-[#FCFCFD]': rest.value,
            'border-[#F04438]': isError,
            'bg-[#EEF2F6]': rest.disabled,
          },
          className
        )}
      >
        {startAdornment &&
          (typeof startAdornment === 'string' ? (
            <div className="grid place-content-center bg-[#F8FAFC] text-[#202939] text-sm border-r border-[#9AA4B2] py-2 px-3 h-11">
              {startAdornment}
            </div>
          ) : (
            startAdornment
          ))}
        <input
          className={cn(
            'w-full h-11 px-3 focus:border-[#2970FF] overflow-hidden outline-none text-sm text-[#202939] placeholder:text-sm placeholder:text-[#9AA4B2] bg-transparent'
          )}
          {...rest}
          id={rest?.id || rest.name}
          onBlur={(e) => {
            setFocused(false);
            rest?.onBlur?.(e);
          }}
          onChange={rest?.onChange}
          onFocus={(e) => {
            setFocused(true);
            rest?.onFocus?.(e);
          }}
          ref={ref}
          type={isSecureInput()}
        />
        {rest.type === 'password' && (
          <div
            className="grid mx-2 my-auto cursor-pointer place-content-center"
            onClick={() => {
              startTransition(() => {
                if (confirmChangeTypeInput && isSecure) {
                  confirmChangeTypeInput(() => setSecured(!isSecure));
                  return;
                }
                if (customHideEye && !isSecure) {
                  customHideEye();
                }
                setSecured(!isSecure);
              });
            }}
          >
            {isSecure ? <EyeIcon /> : <EyeSlashIcon />}
          </div>
        )}
        {showClearIcon && (
          <div className="grid py-2 pr-2 place-content-center">
            <CrossIcon className="cursor-pointer" height="15px" onClick={handleClearField} width="15px" />
          </div>
        )}
        {endAdornment &&
          (typeof endAdornment === 'string' ? (
            <div className="grid place-content-center bg-[#F8FAFC] text-[#202939] text-sm border-l border-[#9AA4B2] py-2 px-3 h-11">
              {endAdornment}
            </div>
          ) : (
            endAdornment
          ))}
      </div>
      {caption && (
        <div className="flex items-start mt-1 font-sans text-xs font-normal text-gray-800 gap-x-2">
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
});

TextField.defaultProps = {
  caption: undefined,
  className: '',
  classNameLabel: undefined,
  confirmChangeTypeInput: undefined,
  customHideEye: undefined,
  endAdornment: undefined,
  isError: false,
  label: '',
  renderLabel: undefined,
  showClearIcon: false,
  startAdornment: undefined,
  triggerHideEye: 0,
};
export default TextField;
