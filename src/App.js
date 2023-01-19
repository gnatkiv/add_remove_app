import { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import UsersList from "./components/Users/UsersList";


const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age }
      ];
    });
  };

  return (
    <div>
      <CreateUser onCreateUser={createUserHandler} />
      <UsersList users={userList} />
    </div>
  );
};
  
export default App;
