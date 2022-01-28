import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/new", { name: name })
            .then(res => {
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div className="p-5">
            <h1>Favorite Authors</h1>
            <h3><Link to="/">Home</Link></h3>
            <h3>Add a new author:</h3>
            <div className="card w-50 p-5 m-3">
                <form onSubmit={submitHandler}>
                
                    <label>Name:</label>
                    <input className="form-control m-3" name="name" id="name" value={name} type="text"
                        onChange={e => setName(e.target.value)}></input>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="d-flex">
                        <button className="btn btn-success m-3"
                            onClick={e => (history.push("/"))}>Cancel</button>
                        <button className="btn btn-success m-3">Add</button>
                    </div>

                </form>
            </div>
        </div>
    )
};

export default Create;