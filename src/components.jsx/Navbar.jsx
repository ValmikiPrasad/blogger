import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contextApi/authContext';
// import { logout } from '../../../backend/controller/auth';

const Navbar = () => {
  const{currUser,logout}=useContext(AuthContext);
  return (
    <div className='nav'>
      <div className="container">
        <div className="photo"><Link className='link' to="/">BlogIt.</Link></div>
        <div className="links">
          <Link className="link" to="/?cat=art"><h6>Art</h6></Link>
          <Link className="link" to="/?cat=science"><h6>Science</h6></Link>
          <Link className="link" to="/?cat=technology"><h6>Technology</h6></Link>
          <Link className="link" to="/?cat=cinema"><h6>Cinema</h6></Link>
          <Link className="link" to="/?cat=design"><h6>Design</h6></Link>
          <Link className="link" to="/?cat=food"><h6>Food</h6></Link>

          {currUser?(<span>{currUser.username}</span>): null}
          {/* <span>logout</span> */}

          {currUser?(<Link className='link' to="/"><span onClick={logout}>logout</span></Link>):(<Link className='link' to="/login">Login</Link>)}

          <span className='write'><Link className="link" to="/write">write</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
