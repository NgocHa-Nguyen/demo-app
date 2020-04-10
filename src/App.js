import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./actions/userAction";
import "./App.css";
import UserItem from "./components/UserItem";
import ListUser from "./components/ListUser";
import { NavLink, Route, BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  element = () => {
    {
      let { data } = this.props.users.users;
      if (data !== undefined && data.length > 0) {
        return data.map((user, index) => (
          <UserItem key={user.id} user={user} index={index}></UserItem>
        ));
      }
    }
  };
  onClick = () => {
    this.props.actionGetData();
  };
  All = () => {
    const About = () => (
      <div>
        <h2>About</h2>
        ...
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <ul>
          <Router>
            <li>
              <Route>
                <NavLink  to="/" ></NavLink>
              </Route>
            </li>
            &emsp;
            <li>
              <Route>
                <NavLink to="/all" component = {this.All} onClick={this.onClick()}>
                  All
                </NavLink>
              </Route>
            </li>
            <Route path="/all">
              <ListUser></ListUser>
            </Route>
          </Router>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actionGetData: () => {
      dispatch(getData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
