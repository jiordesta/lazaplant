import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start footerbody" >
            <div className="container p-4">
                <div className="row" style={{textAlign:'center'}}>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">@Facebook</h5>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">@Twitter</h5>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">@Gmail</h5>
                    </div>
                </div>
            </div>
            <div className="text-center p-3">
                ©JIOrdesta/Developer
            </div>
        </footer>
    );
}

export default Footer;