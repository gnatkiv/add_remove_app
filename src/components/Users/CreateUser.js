import { useState } from "react";
import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();


    const createUserHandler = (e) => {
        e.preventDefault();

        if(inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'TYPE ERROR',
                message: 'You need write more letters'
            })
            return;
        }
        if(+inputAge < 1) {
            setError({
                title: 'BAD AGE',
                message: 'Age mast be more than 0'
            })
            return;
        }

        //console.log(inputName, inputAge);
        props.onCreateUser(inputName, inputAge);
        setInputName('');
        setInputAge('');
    }

    const nameChangeHandler = (e) => {
        setInputName(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setInputAge(e.target.value)
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input} >
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={nameChangeHandler} value={inputName}/>
    
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={inputAge}/>
    
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </>
    )
}

export default CreateUser;