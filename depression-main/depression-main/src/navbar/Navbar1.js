import { Link } from "react-router-dom";
const Navbar1 = () => {
    return (
        <div className='main'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" ><Link to="/homepage">Home</Link></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><Link to="/Hamilton">Hamilton Test</Link><span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"><Link to="/Anxiety">Anxiety Kit</Link><span class="sr-only">(current)</span></a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>

        </div>

    );
}

export default Navbar1;