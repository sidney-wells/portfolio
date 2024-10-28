// Useful file for now

import React from 'react';
import { colors, sizes } from '../../utils/styles.js';

const Button = ({size, color, children, ...props}) => {
  return (
    <button
      sizes={size}
      colors={color}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: React.PropTypes.oneOf(colors),
  size: React.PropTypes.oneOf(sizes),
};

export default Button;