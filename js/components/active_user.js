/**
 * Created by gayane.gasparyan on 01/04/2016.
 */
import React from 'react';

const ActiveUser = (props) => {
    if(props.activeUser == undefined){
        return (
            <h3>Nothing found :(</h3>
        );
    }
    if(props.activeUser.image == undefined){
        return (
            <h3>Loading ...</h3>
        );
    }
    else {
        const imgUrl = `images/${props.activeUser.image}.svg`;
        return (
            <div className="thumbnail text-center">
                <img src={imgUrl}/>
                <div className="thumbnail-caption">
                    <h3>{props.activeUser.name}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Age:</td>
                            <td>{props.activeUser.age}</td>
                        </tr>
                        <tr>
                            <td>Favorite animal:</td>
                            <td>{props.activeUser.image}</td>
                        </tr>
                        <tr>
                            <td>phone:</td>
                            <td>{props.activeUser.phone}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <b>Favorite phrase:</b>
                        <div>{props.activeUser.phrase}</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default ActiveUser;