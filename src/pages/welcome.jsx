import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="container-fluid pagebody">
            <div className="row pagecontent">
                <Link to='/home' style={{textDecoration:'none', textAlign:'center',fontSize:'80px'}}>GET STARTED</Link>
            </div>
            <div className="row">
                <span style={{fontSize:'80px', fontFamily:'Courier', marginTop:'20%',textAlign:'center',color:'#9BFEA1'}}>
                    <TypewriterComponent
                        options={{
                            loop:true,
                            delay:50,
                            
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('Welcome!')
                            .pauseFor(1)
                            .deleteAll()
                            .typeString('LAZAPLANT')
                            .pauseFor(1)
                            .deleteAll()
                            .typeString('Signup now!')
                            .pauseFor(1)
                            .deleteAll()
                            .start()
                        }}
                    />
                </span>
            </div>
        </div>
    );
}
 
export default Welcome;