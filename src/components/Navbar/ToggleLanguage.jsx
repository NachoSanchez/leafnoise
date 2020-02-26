import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

const ToggleLanguage = () => {
    const {english, toggleLanguage } = useContext(LanguageContext);
    return (
        <button onClick={toggleLanguage}>
            { english ? 'ESP' : 'ENG' }
        </button>
    )
}

export default ToggleLanguage;