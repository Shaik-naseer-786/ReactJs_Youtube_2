import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Enter name'
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder='Enter age'
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Hello {user.name}, your age is {user.age}</h1>
    </div>
  );
};

export default Form;
