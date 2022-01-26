import React from "react";
import './App.css';
import users from './users.json';
import UserInfo from "./Components/UserInfo";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {users.map((user) =>{
          return(
            <UserInfo
              name = {user.name}
              email = {user.email}
              website = {user.website}
            />
            
          )
        })}
      </div>
    )
  }

}

  



export default App;




