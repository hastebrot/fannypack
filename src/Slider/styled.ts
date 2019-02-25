import { palette, theme } from 'styled-tools';
import { tint } from 'polished';
import Label from 'reakit/Label';

import _defaultPalette from '../themes/default/palette';
import { Box } from '../primitives';
import styled, { css } from '../styled';
import HiddenInput from '../_utils/HiddenInput';
import { LocalSliderProps } from './Slider';

const defaultPalette = _defaultPalette({});

export const SliderIcon = styled(Box)<{ state?: string }>`
  background-color: ${palette('white700')};
  border: 1px solid #bdbdbd;
  border-radius: 1em;
  height: 1.5em;
  position: relative;
  width: 3em;

  & {
    ${props =>
      props.state &&
      css`
        border-color: ${props => palette(`${props.state}`)};
        box-shadow: ${props => palette(`${props.state}`)} 0px 0px 0px 1px !important;
      `};
  }

  & {
    ${theme('fannypack.Slider.base')};
  }
`;

export const HiddenSlider = HiddenInput<LocalSliderProps>({
  Icon: SliderIcon,
  checkedCss: css`
    background-color: ${(props: any) => palette(props.palette || 'primary')};
    transition: all ease 0.2s;
  `,
  disabledCheckedCss: css`
    background-color: ${(props: any) =>
      tint(0.5, palette(props.palette || 'primary', 0, defaultPalette.primary)(props))};
    border-color: ${(props: any) => tint(0.5, palette(props.palette || 'primary', 0, defaultPalette.primary)(props))};
  `,
  disabledUncheckedIconCss: css`
    background: ${palette('white700')};
  `,
  checkedIconCss: css`
    border-color: ${(props: any) => palette(props.palette || 'primary', 0, defaultPalette.primary)};
    left: 1.7em;
  `,
  disabledCheckedIconCss: css`
    border-color: ${(props: any) => tint(0.5, palette(props.palette || 'primary', 0, defaultPalette.primary)(props))};
  `,
  uncheckedIconCss: css`
    background: white;
    content: '';
    border-radius: 100%;
    border: 1px solid #bdbdbd;
    height: 1em;
    width: 1em;
    top: 0.2em;
    left: 0.2em;
    transition: all ease 0.2s;
    position: absolute;
  `,
  themePrefix: 'Slider'
});

export default styled(Label)<LocalSliderProps>`
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;

  & {
    ${theme('fannypack.Slider.label')};
  }
`;
