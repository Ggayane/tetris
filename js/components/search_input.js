/**
 * Created by gayane.gasparyan on 01/04/2016.
 */
import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="searchbar form-group">
                <input className="form-control"
                       type="text"
                       placeholder="Search by name..."
                       onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchInput;