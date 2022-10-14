import { Navbar } from 'react-bootstrap';
import { CloudSun } from 'react-bootstrap-icons';


function TopNavbar(props) {

    return (
        <>
            <Navbar>                
                    <Navbar.Brand>
                        <CloudSun className="mr-2"/>
                        Weatheroas
                    </Navbar.Brand>
            </Navbar>
        </>
    );
}


export { TopNavbar };