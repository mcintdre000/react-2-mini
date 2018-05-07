import React from 'react';
import PropTypes from 'prop-types';

export default function EditToggle(props) {
  console.log(event)
  return (
    <select className="dropDownContainer ml0" onChange={() => props.update()}>
      <option value={true}> Allow Edit </option>
      <option value={false}> Disable Edit </option>
    </select>
  )
}

EditToggle.propTypes = {
  update: PropTypes.func.isRequired
}