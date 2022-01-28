import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

const EditComponent = () => {
    
    const {id}= useParams()
    const history = useHistory()
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8000/api/authors/"+id)
      .then(res => {
          setName(res.data.name)
      } ).catch(err => {
          console.log(err)
      })
    },[])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name: name })
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
            })    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <p><Link to="/">Home</Link></p>
        <h3>Edit this author</h3>
        <div className="card w-50 p-5 m-3">
                <form onSubmit={submitHandler}>
                    <label>Name:</label>
                    <input className="form-control m-3" name="name" id="name" value={name} type="text"
                        onChange={e => setName(e.target.value)}></input>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="d-flex">
                        <Link to="/" className="btn btn-success m-3">Cancel</Link>
                        <button className="btn btn-success m-3">Edit</button>
                    </div>
                </form>
            </div>
    </div>
    )
};

export default EditComponent;


// * edit one
    //on load display info - useEffect
    // id by useparams -useParams
    // grab info from the backend- axios
    // use the info on my form- 
    // form (onChnage) -useState
    //submit handler
    //if successful:redirect "/" -usehistory