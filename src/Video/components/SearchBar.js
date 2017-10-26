import React, { Component } from 'react';

class SearchBar extends Component {

    render() {

        return (
            <div className="search-bar">
                <input onChange={this.onSearchChange} />
            </div>
        );
    }

    onSearchChange = (e) => {
        const { onVideoSearch } = this.props;

        onVideoSearch(e.target.value);
    }
}

export default SearchBar;
