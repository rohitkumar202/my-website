import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <div class="d-flex flex-row-reverse">
            <Link className="p-2 ml-5" to='/about'> About</Link>
            <Link className="p-2 ml-5" to='/'> Home</Link>            
        </div>
    )
}

