import React, { Component } from 'react';



class SearchBar extends Component {
    state = {
        userInput: '',
    }

    handleInputChange = () => {
        this.setState({
            userInput: this.search.value
        })
      }
     
    render() {
        return (
            <form>
                <input 
                    placeholder= "Search for..."
                    ref = {input => this.search = input}
                    onChange= {this.handleInputChange}
                />
                <p>{this.state.userInput}</p>
            </form>
        )
    }
}

export default SearchBar;