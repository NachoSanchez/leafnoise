import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

class LanguageContextProvider extends Component {
    state = {
        english: false,
    }

    toggleLanguage = () => {
        this.setState({english: !this.state.english});
    }

    componentWillMount(){
        const language =  localStorage.getItem('language');
        this.setState(JSON.parse(language));
    }
 
     componentDidUpdate(){
         const newLang = JSON.stringify(this.state)
         localStorage.setItem('language', newLang)
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