import React, { Component } from 'react';

class UserItem extends Component {
    render() {
      
        return (
            <div>
                <h5>{this.props.user.id} : {this.props.user.title} </h5>
            </div>
        );
    }
}

export default UserItem;