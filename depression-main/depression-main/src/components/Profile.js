import Navbar1 from "../navbar/Navbar1";
import axios from 'axios';
const Profile = () => {

    function fetchData(){
        var data;
        axios.post("http://localhost:8000/api/login/",{'username':window.username}).then(
        (response) => {
            data = response;
            console.log(response);
        })
    return data;
    }

    
    
    
    return (
        <div className="profile">
            <Navbar1 />
            Username:
            Password:
            Last Test:
        </div>
    );
}

export default Profile;