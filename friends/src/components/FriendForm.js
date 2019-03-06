import React, { useState } from 'react';

const FriendForm = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      props.onSubmit({ name, age, email, gender });
      setName('');
      setAge('');
      setEmail('');
      setGender('');
    }}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="gender"
        name="gender"
        onChange={e => setGender(e.target.value)}
        value={gender}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;
