import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUsers } from '../store/firebase-actions'
import { uiActions } from '../store/uiSlice';

const Signup = () => {

    const [fname,setfName]       = useState('')
    const [lname,setlName]       = useState('')
    const [address,setAddress]   = useState('')
    const [contact,setContact]   = useState('')
    const [email,setEmail]       = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)


    const handleCreate = () => {
        if ((fname !== '') && (lname !== '') && (address !== '') && (contact !== '') && (email !== '') && (username !== '') && (password !== '')){
            dispatch(
                createUser({
                    fname:fname,
                    lname:lname,
                    address:address,
                    contact:contact,
                    email:email,
                    username:username,
                    password:password
                })
            )
            dispatch(
                getUsers()
            )
        }
        else{
            dispatch(uiActions.showUI({type:'error', message:'Empty inputs!!'}))
            setTimeout(() => {dispatch(uiActions.unShowUI())},2000)
        }
    }


    return (
        <div className="container-fluid pagebody">
            <div className="row pagecontent">
                {user === null?
                    <div className="col"  style={{paddingRight:'5%',maxWidth:'600px'}}>
                        Signup!
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="first_name" placeholder='First name here..' value={fname} onChange={(e) => setfName(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="last_name" placeholder='Last name here..' value={lname} onChange={(e) => setlName(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="address" placeholder='Address here..' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="contact" placeholder='Contact here..' value={contact} onChange={(e) => setContact(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="email" placeholder='Email address here..' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="text" className="form-control" id="user_name" placeholder='User name here..' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div style={{padding:'5px'}}>
                            <input type="password" className="form-control" id="password" placeholder='Password here..' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-outline-primary" style={{margin:'10px'}} onClick={handleCreate}>Create account</button>
                    </div>
                :null}   
            </div>
        </div>
    );
}
 
export default Signup;