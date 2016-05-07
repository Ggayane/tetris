import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/user_list';
import ActiveUser from './components/active_user';
import SearchInput from './components/search_input';
import SortByButtons from './components/sort_buttons';

import $ from 'jquery';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            Searchusers: [], //not sure about this shit
            activeUser: {}
        };
    }

    componentDidMount() {
        //get json data from the generated file
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            cache: false,
            success: function (users) {
                // random number for random active user
                var max = users.length,
                    rand = Math.floor(Math.random() * max);
                this.setState({users});
                this.setState({Searchusers: users});
                this.setState({activeUser: users[rand]});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    }

    changeList(prop) {
        var term = prop['prop'].toLowerCase(),
            users = this.state.Searchusers,
            newList = [];

        for (var i = 0; i < users.length; i++) {
            if (users[i]['name'].toLowerCase().indexOf(term) > -1) {
                //push data into results array
                newList.push(users[i]);
            }
        }
        this.setState({users: newList});
        if(newList == [])
            this.setState({activeUser: {}});
        else
            this.setState({activeUser: newList[0]});
    }

    sortList(prop) {
        var dataObj = this.state.users;
        // sort by name
        if(prop.prop.type == 'nameASC'){
            if(prop.prop.term == true){
                dataObj.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
                });
            }
            else{
                dataObj.sort(function(a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    return (nameA > nameB) ? -1 : (nameA < nameB) ? 1 : 0;
                });
            }
        }
        else{
            // sort by age
            if(prop.prop.term == true){
                dataObj.sort(function(a, b) {
                    var ageA = eval(a.age);
                    var ageB = eval(b.age);
                    return (ageA < ageB) ? -1 : (ageA > ageB) ? 1 : 0;
                });
            }
            else{
                dataObj.sort(function(a, b) {
                    var ageA = eval(a.age);
                    var ageB = eval(b.age);
                    return (ageA > ageB) ? -1 : (ageA < ageB) ? 1 : 0;
                });
            }
        }
        this.setState({users: dataObj});
        this.setState({activeUser: dataObj[0]});
    }

    render() {
        return (
            <div className="app container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchInput onSearchTermChange={prop => this.changeList({prop})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <SortByButtons sortList={prop => this.sortList({prop})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-2">
                        <ActiveUser activeUser={this.state.activeUser}/>
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-10">
                        <UserList users={this.state.users} selectUser={activeUser => this.setState({activeUser})}/>
                    </div>
                </div>
            </div>
        );
    }
}

