import React from 'react';
import PropTypes from 'prop-types';

export default function GenericComponent({ children }) {
  return (
    <div>{children} and other stuff</div>
  );
}
/*
GenericComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

GenericComponent.defaultProps = {
  children: null,
};
*/
