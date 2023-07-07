import '../css/SI.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";




const SimpleInput = (props) => {

    const navigate = useNavigate();
    const [EnteredName, setEnteredName] = useState('');
    const [EnteredPwd, setEnteredPwd] = useState('');
    const InputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const IputChangeHandler = (event) => {
        setEnteredPwd(event.target.value);
    }
    const handleSubmit = (e) => {

        e.preventDefault();
        if (EnteredName.trim() === '') {
            alert("Username is empty! Enter valid username");
            return;
        }

        axios.post('http://localhost:8000/api/login/', { 'username': EnteredName, 'password': EnteredPwd }).then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                navigate('/homepage');
                window.username = EnteredName;
            }
            
        })
        .catch((error) => {
          alert("Incorrect credentials");
        });


    };


    return (
        <div className="divis">
            <header className="App-header">

                <form onSubmit={handleSubmit} >
                    <h3>Login Here</h3>
                    <label className="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username" onChange={InputChangeHandler} />
                    <label className="password">Password</label>
                    <input type="password" placeholder="Password" id="password" onChange={IputChangeHandler} />
                    <button><Link to="/homepage">Login</Link></button>
                </form>
            </header>
        </div>
    );

}
export default SimpleInput;