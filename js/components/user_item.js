/**
 * Created by gayane.gasparyan on 01/04/2016.
 */
import React from 'react';

const UserItem = ({user, selectUser}) => {
    const imgUrl = `images/${user.image}.svg`;
    return <tr onClick={() => selectUser(user)}>
        <td><img className="rc-img" src={imgUrl}/></td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.phone}</td>
    </tr>;
};

export default UserItem;