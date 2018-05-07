import React from 'react';
import PropTypes from 'prop-types';

export default function FamilyChanger(props) {
  return (
    <select className="dropDownContainer" onChange={event => props.update(event.target.value)} 
                                          value={props.fontFamily}
                                          disabled={props.allowEdit === false }>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}

FamilyChanger.propTypes = {
  update: PropTypes.func.isRequired,
  fontFamily: PropTypes.string.isRequired
}