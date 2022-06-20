import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import usericon from '../img/2.png'

import { authActions } from '../store/authSlice';

const Navbar = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const account = () => {
        return(
            <>
                <Link to='/profile'>
                    <img src={usericon} alt="" width={'70px'}/>
                </Link>
                <button href='/' type="button" className="btn btn-outline-primary" style={{color:'white',borderRadius:'50px',fontSize:'30px', margin:'5px', borderStyle:'none'}} onClick={() => dispatch(authActions.logout())}>Logout</button>
            </>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbarbody">
            <div className="container-fluid">
                <Link className='linkbody' to='/home' style={{fontSize:'50px'}}>LAZAPLANT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='linkbody' to='/browse'>Browse</Link>
                        </li>
                        {user !== null?
                            <li className="nav-item">
                                <Link className='linkbody' to='/myplants'>My plants</Link>
                            </li>
                        :null}
                    </ul>
                    {user !== null? account():
                        <>
                            <Link className='linkbody' to='/signup' style={{textDecoration:'none'}}>signup</Link>
                            <Link className='linkbody' to='/home' style={{textDecoration:'none'}}>Login</Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;