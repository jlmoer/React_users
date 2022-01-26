import React from "react";
import './App.css';
import users from './users.json';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        {users.map((user) =>{
          return(
            <p>{user.name} - {user.email} - {user.website}</p>
          )
        })}
      </div>
    )
  }

}

  



export default App;




