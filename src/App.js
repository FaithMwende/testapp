import React, { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import "./styles.css";


const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (user) => {
    user.id = Date.now();
    setUsers([...users, user]);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDeleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleEditUser = (userToEdit) => {
    setEditingUser(userToEdit);
  };

  return (
    <div>
      
      <h1>React JS Class </h1>
      <p>Python might be all the rate…but we’ve got something even better</p>
      <UserForm user={editingUser} onAdd={handleAddUser} onUpdate={handleUpdateUser} />
      <UserTable users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
};

export default App;
