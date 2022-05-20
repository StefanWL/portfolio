import React from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import User from "../../auth/User";

function Logout ({logOutNav}) {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('api/logout')
            .then(() => {
                //successful response
            })
            .catch(() => {
                //handle if something went wrong
            })
            .then(() => {
                User.logout(() => {
                    logOutNav();
                    navigate("/");
                });
            })
    }

    return (
        <form className="form-inline" onSubmit={e => handleSubmit(e)}>
            <button className="mx-auto w-100 d-block text-center submit" name="submit" type="submit">Logout</button>
        </form>
    );
    
}

export default Logout;