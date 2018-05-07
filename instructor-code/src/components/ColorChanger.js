import React from 'react';
import PropTypes from 'prop-types';

// Note to self: 1) you're awesome. 2) make sure update prop is a function that....

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" onChange={event => props.update(event.target.value)} value={props.fontColor}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}

ColorChanger.propTypes = {
  update: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
}
