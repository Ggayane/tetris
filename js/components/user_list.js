/**
 * Created by gayane.gasparyan on 01/04/2016.
 */
import React from 'react';
import UserItem from './user_item';

const UserList = (props) => {
    const userItems = props.users.map((user) => {
        return <UserItem
            key={user.id}
            user={user}
            selectUser={props.selectUser}
        />;
    });
    return(
        <table className="user-list table table-striped">
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
                {userItems}
            </tbody>
        </table>
    );
};

export default UserList;
