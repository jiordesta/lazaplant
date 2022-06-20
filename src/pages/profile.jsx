import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, updateUser } from '../store/firebase-actions';

const Profile = () => {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    const [edit, setEdit] = useState(true)
    const [fname,setfName]       = useState('')
    const [lname,setlName]       = useState('')
    const [address,setAddress]   = useState('')
    const [contact,setContact]   = useState('')
    const [email,setEmail]       = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        if (user !== null){
            setfName(user.fname)
            setlName(user.lname)
            setAddress(user.address)
            setContact(user.contact)
            setEmail(user.email)
            setUsername(user.username)
            setPassword(user.password)
        }
    },[user])


    const handleEdit = () => {

        setEdit(!edit)
        if (edit === false){
            dispatch(updateUser(user.id,{fname:fname,lname:lname,address:address,contact:contact,email:email,username:username,password:password}))
        }
        
    }
    const handleDelete = () => {
        dispatch(deleteUser(user.id))
    }
    return (
        <div className="container-fluid pagebody">
            <div className="row">
                <div className="col-6 pagecontent">
                    {user !== null?
                    <>  
                        <h1>My Profile</h1>
                        <div style={{padding:'10px',color:'white',fontSize:'100px'}}>
                            <input type="text" className="form-control" id="first_name" placeholder={'First name here..'} value={fname} onChange={(e) => setfName(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="last_name" placeholder='Last name here..' value={lname} onChange={(e) => setlName(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="address" placeholder='Address here..' value={address} onChange={(e) => setAddress(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="contact" placeholder='Contact here..' value={contact} onChange={(e) => setContact(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="email" placeholder='Email address here..' value={email} onChange={(e) => setEmail(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="text" className="form-control" id="user_name" placeholder='User name here..' value={username} onChange={(e) => setUsername(e.target.value)} disabled = {edit}/>
                        </div>
                        <div style={{padding:'10px'}}>
                            <input type="password" className="form-control" id="password" placeholder='Password here..' value={password} onChange={(e) => setPassword(e.target.value)} disabled = {edit}/>
                        </div>
                        <button className="btn" onClick={handleEdit}>Enable Edit</button>
                        <button className="btn" onClick={handleDelete}>Delete Account</button>
                    </>
                    :null}
                </div>
            </div>
        </div>
    );
}
 
export default Profile;