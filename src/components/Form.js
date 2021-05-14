import React, {useState, useContext} from 'react';
import styles from './Form.module.css';
import MyContext from '../context/MyContext';

const Form = (props) => {
    const [form, setForm] = useState('')
    const setName = useContext(MyContext).setName;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        setName(form);

        setForm('');
        console.log(form);
    }

    const handleChange = (e) => {
        setForm(e.target.value);
        console.log(form);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.formGroup}>
                <label>Your name:</label>
                <input type="text" name="name" value={form} onChange={handleChange} className={styles.formInput}/>
                <input hidden type="submit"/>
            </form>
        </>
    )
}

export default Form;