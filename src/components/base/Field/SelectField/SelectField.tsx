import React, { useId, useMemo } from 'react';
import ReactSelect, { components, DropdownIndicatorProps, StylesConfig } from 'react-select';
import { ChevronDownIcon } from '@/components/base/Icons';
import clsx from 'clsx';

interface Option {
  label: string;
  value: any;
}

interface Props {
  defaultValue?: number | string | readonly string[];
  disabled?: boolean;
  label?: string;
  labelClassName?: string;
  labelPosition?: 'left' | 'top';
  name?: string;
  onSelect?: (values: Option) => void;
  options: Option[];
  placeholder?: string;
  renderLabel?: () => React.ReactElement;
}

const SelectField = ({
  label,
  labelClassName,
  labelPosition,
  placeholder,
  options,
  defaultValue,
  renderLabel,
  onSelect,
  ...props
}: Props) => {
  const id = useId();
  const handleChange = (option: any) => {
    onSelect?.(option as Option);
  };

  const defaultValueSelect = useMemo(() => {
    return options.filter((option) => option.value === defaultValue)[0];
  }, [defaultValue, options]);

  const borderStyle = (isFocused: boolean) => {
    if (isFocused) {
      return '1px solid rgb(73,66,228)';
    }
    return '1px solid rgb(156,163,175)';
  };

  const customStyles: StylesConfig<Option> = {
    control: (_, { isFocused }) => ({
      border: borderStyle(isFocused),
      borderRadius: '4px',
      display: 'flex',
      height: '40px',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'rgb(156,163,175)',
      fontSize: '14px',
      fontWeight: 'normal',
    }),
  };

  const renderDropdownIndicator = (dropdownProps: DropdownIndicatorProps<any>) => {
    return (
      <components.DropdownIndicator {...dropdownProps}>
        <ChevronDownIcon height="14" width="14" />
      </components.DropdownIndicator>
    );
  };

  const renderLabelInput = (
    <div
      className={clsx({
        'h-10 flex items-center': labelPosition === 'left',
      })}
    >
      {renderLabel ? (
        renderLabel()
      ) : (
        <label
          className={clsx(
            'text-[#364152] font-semibold text-xs whitespace-nowrap',
            {
              'mb-1': labelPosition === 'top',
              'mr-1': labelPosition === 'left',
            },
            labelClassName
          )}
          htmlFor={props.name || id}
        >
          {label}
        </label>
      )}
    </div>
  );

  return (
    <div
      className={clsx('w-full flex', {
        'flex-col': (label || renderLabel) && labelPosition === 'top',
        'flex-row': (label || renderLabel) && labelPosition === 'left',
      })}
    >
      {(label || renderLabel) && renderLabelInput}
      <div className="w-full h-full">
        <ReactSelect
          components={{
            DropdownIndicator: (dropdownProps) => renderDropdownIndicator(dropdownProps),
            IndicatorSeparator: null,
          }}
          defaultValue={defaultValueSelect}
          getOptionLabel={(option: Option) => option.label}
          getOptionValue={(option: Option) => option.value}
          inputId={props.name || id}
          isDisabled={props.disabled}
          onChange={handleChange}
          options={options}
          placeholder={placeholder}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

SelectField.defaultProps = {
  defaultValue: '',
  disabled: false,
  label: '',
  labelClassName: '',
  labelPosition: 'top',
  name: '',
  onSelect: undefined,
  placeholder: '',
  renderLabel: undefined,
};

export default SelectField;
