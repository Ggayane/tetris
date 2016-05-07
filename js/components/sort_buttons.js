/**
 * Created by gayane.gasparyan on 01/04/2016.
 */
import React, { Component } from 'react';

class SortByButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameASC: true,
            ageASC: true
        };
    }

    changeOrder(type, term) {
        (type == 'nameASC') ?  this.setState({nameASC: term}) :  this.setState({ageASC: term});
        this.props.sortList({type, term});
    }

    render() {
        return (
            <div className="toolbar form-group">
                <button className="btn btn-default" onClick={()=>this.changeOrder('nameASC', !this.state.nameASC)}>
                    <i className="icon fa fa-sort-alpha-asc"></i>
                    <span>Sort by name</span>
                </button>
                <button className="btn btn-default" onClick={()=>this.changeOrder('ageASC', !this.state.ageASC)}>
                    <i className="icon fa fa-sort-numeric-desc"></i>
                    <span>Sort by age</span>
                </button>
            </div>
        )
    }
}

export default SortByButtons;
