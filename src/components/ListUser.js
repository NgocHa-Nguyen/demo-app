import React, { Component } from 'react';
import {connect} from "react-redux"
import { getData } from "../actions/userAction";
import UserItem from './UserItem';
import { NavLink } from 'react-router-dom'
class ListUser extends Component {   
    element = () => {
      {
        let { data } = this.props.users.users;
        if (data !== undefined && data.length > 0) {
          return data.map((user, index) => (
            <UserItem
              key={index}
              user={user}
              index={index}
            ></UserItem>
          ));
        }
      }
    };
    render() {
        return (
            <div>
              <NavLink to=''><h4>{this.element()}</h4></NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      users: state.users
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      actionGetData: () => {
        dispatch(getData());
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(ListUser);