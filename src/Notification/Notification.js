import React from 'react';
import '../Notification/Notification.css'

const Notification = ({ message = 'Mensaje', severity = 'error'}) => {

    const notificationStyles = {
    
        position: 'absolute',
        top: 100,
        right: severity === 'success' ? 5 : 0,
        width: '250px',
        height: 'auto',
        padding: '10px 20px 10px 20px',
        color: 'white',
    }


    return (
        <div style= {notificationStyles} className={`${severity === 'succes' ? 'Success' : 'Error'} Message`}>
            {message}
        </div>
    )
}

export default Notification