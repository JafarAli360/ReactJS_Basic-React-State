import React, { Component } from "react"; //react
import axios from "axios"; //ajax axios

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  getUser = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users/1"); //memanggil json dari situs
    this.setState({
      user: response.data,
    }); // setState : Didalamnya sudah dianggap sebuah state
  };
  componentDidMount() {
    this.getUser();
  }
  //componentDidMount : Property yang sifatnya berubah
  render() {
    const { user } = this.state; //value
    return (
      <div>
        <div>My Name Is {user.name}</div>
        <div>My Name Is {user.username}</div>
        <div>My Name Is {user.email}</div>
      </div>
    );
    //{user.name} : mengambil dynamic value
  }
}

export default App;
