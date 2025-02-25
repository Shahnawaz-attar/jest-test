import React, { useState } from 'react';

/**
 * NameForm component allows the user to type a name and displays it.
 */
const NameForm = () => {
  const [name, setName] = useState('');

  // Update state when input changes.
  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default NameForm;
