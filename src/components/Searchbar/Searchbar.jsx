import Button from "../Button";
import PropTypes from 'prop-types';
import {  useState } from 'react';

const Searchbar = ({onSubmit}) => {
    const [inputText, setInputText] = useState('');
   
    const handleChange = e => {
    setInputText(e.target.value );
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText === '') return alert('Please insert your query for search');
        onSubmit(inputText)
    setInputText("");
  };
   
   
        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={handleSubmit}>
              
                        <Button />
                        <input
                            className="SearchForm-input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={inputText}
                            onChange={handleChange}
                        />
                    </form>
                </header>
            </>
        )
    
};
Searchbar.propTypes = {
  valueInput: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
 
};
    export default Searchbar;