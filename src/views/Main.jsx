import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Main = () => {

    const [refresh, setRefresh] = useState(true);
    const [authors, setAuthors] = useState(null);


    const deleteHandler = (e, id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {setAuthors(res.data)}
            )
            .catch(err => console.log(err))
    }, [refresh])

    return (
        <div>
            <h1>Favorite Authors</h1>
            <p><Link to="/authors/new">Add an author</Link></p>
            <h3>We have quotes by:</h3>
            { 
                authors ? (
                    <table className="table" >
                        <tbody>
                            {
                                authors.map((author, i) => (
                                    <tr key={i}>
                                        <td><h5>{author.name}</h5></td>
                                        <td className= "d-flex gap-2 justify-content-center">
                                            <Link to={`/authors/${author._id}/edit`}> Edit</Link>
                                            <button className="btn btn-danger" id={author._id} onClick={(e)=>{deleteHandler(e, author._id)}} >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                ) :
                    <h1>Loading...</h1>
            }
        </div>
    )
};

export default Main;