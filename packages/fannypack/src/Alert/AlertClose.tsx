import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonProps } from '../Button/Button';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Omit } from '../types';
import { AlertClose as _AlertClose } from './styled';

export type LocalAlertCloseProps = {
  isAbsolute?: boolean;
  onClickClose?: ButtonProps['onClick'];
};
export type AlertCloseProps = Omit<ButtonProps, 'children'> & LocalAlertCloseProps;

export const AlertClose: React.FunctionComponent<LocalAlertCloseProps> = ({ onClickClose, ...props }) => (
  <_AlertClose kind="link" onClick={onClickClose} {...props}>
    <VisuallyHidden>Close</VisuallyHidden>
    <Icon a11yHidden icon="times" />
  </_AlertClose>
);

AlertClose.propTypes = {
  isAbsolute: PropTypes.bool,
  onClickClose: PropTypes.func
};

AlertClose.defaultProps = {
  isAbsolute: false,
  onClickClose: undefined
};

const C: React.FunctionComponent<AlertCloseProps> = AlertClose;
export default C;
