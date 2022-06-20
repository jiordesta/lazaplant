import { Alert } from '@mui/material';
import React from 'react';

const Notification = ({type,message}) => {
    return (
        <Alert  severity={type}>
            {message}
        </Alert>
    );
}
 
export default Notification;