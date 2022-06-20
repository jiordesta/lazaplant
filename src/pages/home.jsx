import React, {useState} from 'react';
import img from '../img/1.png'
import { checkUser } from '../store/firebase-actions';
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const user = useSelector((state) => state.auth.user)

    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(checkUser({username:userName, password:password}))
    }

    return (
        <div className="container-fluid pagebody">
            <div className="row">
                <div className="col pagecontent">
                    {user === null?
                    <>
                        <h1>
                            Signup now! to buy and sell plants in our website.
                        </h1>
                        <img src={img} alt="" width={'100%'} style={{minWidth:'10%'}}/>
                        <h1>
                            Be part of our growing community.
                        </h1>
                    </>
                    :
                    <>
                        <h1>Thank you for being part of our community!!</h1>
                        <img src={img} alt="" width={'50%'} style={{minWidth:'5%'}}/>
                    </>
                    }
                </div>
                {user === null?
                    <div className="col pagecontent">
                        <div>
                            Signin account!
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="user_name" placeholder='User name here..' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="password" className="form-control" id="password" placeholder='Password here..' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-primary" style={{margin:'10px'}} onClick={handleLogin}>Login</button>
                        
                    </div>
                :null}
            </div>
        </div>
    );
}
 
export default Home;