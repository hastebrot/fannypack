import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import Text from '../Text';
import { Omit } from '../types';
import _Slider, { HiddenSlider, SliderIcon } from './styled';

export type LocalSliderProps = {
  /** Automatically focus on the slider */
  autoFocus?: boolean;
  checked?: boolean;
  className?: string;
  /** Is the slider checked by default? */
  defaultChecked?: boolean;
  /** Disables the slider */
  disabled?: boolean;
  /** ID for the slider */
  id?: string;
  /** Makes the slider required and sets aria-invalid to true */
  isRequired?: boolean;
  /** Slider label */
  label?: string;
  name?: string;
  palette?: string;
  /** State of the slider. Can be any color in the palette. */
  state?: string;
  /** Initial value of the slider */
  value?: string;
  /** Function to invoke when focus is lost */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Function to invoke when slider has changed */
  onChange?: React.FormEventHandler<HTMLInputElement>;
  /** Function to invoke when slider is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};
export type SliderProps = LocalSliderProps & Omit<ReakitLabelProps, 'children'>;

export const Slider: React.FunctionComponent<LocalSliderProps> = ({
  autoFocus,
  checked,
  className,
  defaultChecked,
  disabled,
  id,
  isRequired,
  label,
  onBlur,
  onChange,
  onFocus,
  name,
  palette,
  state,
  value,
  ...props
}) => (
  <_Slider
    aria-describedby="label"
    aria-invalid={state === 'danger'}
    aria-label={label}
    aria-required={isRequired}
    disabled={disabled}
    {...props}
  >
    <HiddenSlider
      autoFocus={autoFocus}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      id={id}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      name={name}
      palette={palette}
      state={state}
      type="checkbox"
      value={value}
    />
    <SliderIcon state={state} />
    {label && (
      <Text id="label" htmlFor={id} marginLeft="major-1">
        {label}
      </Text>
    )}
  </_Slider>
);

export const sliderPropTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  palette: PropTypes.string,
  state: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};
Slider.propTypes = sliderPropTypes;

export const sliderDefaultProps = {
  autoFocus: false,
  checked: undefined,
  className: undefined,
  defaultChecked: undefined,
  disabled: false,
  id: undefined,
  isRequired: false,
  label: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  palette: undefined,
  name: undefined,
  state: undefined,
  value: undefined
};
Slider.defaultProps = sliderDefaultProps;

const C: React.FunctionComponent<SliderProps> = Slider;
export default C;
