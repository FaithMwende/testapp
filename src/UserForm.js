import React, { useState } from "react";
import "./styles.css";

const UserForm = ({ user, onAdd, onUpdate }) => {
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: user ? user.id : null,
      firstName: firstName,
      lastName: lastName,
      email: email
    };
    user ? onUpdate(newUser) : onAdd(newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">{user ? "Update" : "Add"}</button>
    </form>
  );
};

export default UserForm;
