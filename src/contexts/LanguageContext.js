import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = {
        english: false,
    }

    toggleLanguage = () => {
        this.setState({english: !this.state.english});
    }

    render(){
        return (
            <LanguageContext.Provider value={{...this.state, toggleLanguage: this.toggleLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;