import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: make sure we call callback from parent component
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        onChange={this.onInputChange} 
                        value={this.state.term} 
                        type="text" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;