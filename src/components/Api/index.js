import React from "react";
import axios from "axios";

class Api extends React.Component {
  state = {
    user: [],
  };
  componentDidMount() {
    axios
      .get("https://api.tenor.com/v1/trending?key=4POWBB3A9FAZ")
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          user: res.data.results,
        });
      });
  }

  render() {
    return (
      <div>
        {/* {this.state.users.map((user) => (
          <div>{user.name}</div>
        ))} */}
        <div>
          {this.state.user.map((item) => (
            <img src={item.url} alt="" />
          ))}
        </div>
      </div>
    );
  }
}

export default Api;
