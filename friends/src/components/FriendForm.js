import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  display: block;
`;

const FriendForm = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  return (
    <Form onSubmit={e => {
      e.preventDefault();
      props.onSubmit({ name, age, email, gender });
      setName('');
      setAge('');
      setEmail('');
      setGender('');
    }}>
      <FormInput
        type="text"
        placeholder="name"
        name="name"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <FormInput
        type="text"
        placeholder="age"
        name="age"
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <FormInput
        type="text"
        placeholder="email"
        name="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <FormInput
        type="text"
        placeholder="gender"
        name="gender"
        onChange={e => setGender(e.target.value)}
        value={gender}
      />
      <button type="submit">Add Friend</button>
    </Form>
  );
};

export default FriendForm;
