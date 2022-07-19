import './PokemonForm.css';
import {useState} from 'react';

const defaultName = '';

const PokemonForm = (props) => {
    const [nameValue, setNameValue] = useState(defaultName);
    //console.log(nameValue);

    const handleNameChange = (event) => {
        const target = event.target;
        const newValue = target.value;
        setNameValue(newValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submitFunction(nameValue);
        setNameValue(defaultName);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Pokemon Name
                <input type='text' name='name' onChange={handleNameChange} value={nameValue} />
            </label>
            <input type='submit' />
            
        </form>
    )

};

export default PokemonForm;