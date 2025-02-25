import React, { useState } from 'react';

/**
 * SubmitForm component contains a form that calls onSubmit when submitted.
 *
 * @param {object} props - Component properties.
 * @param {Function} props.onSubmit - Function to call on form submission.
 */
const SubmitForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload.
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
