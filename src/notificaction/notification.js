//import './Notification.css'
import { useState, createContext, useContext } from 'react'
import React from 'react';

const Notification = ({ message /* = 'Esto es un mensaje' */, severity /* = 'success' */, otherClass = 'Message' }) => {

    const estiloNotificacion = {
      position: 'absolute',
      top: 100,
      right: 5,
      width: 'auto',
      height: 'auto',
      padding: '10px 20px 10px 20px',
    }

    if(message === '') {
        return null
    }
  
    const config = true ? 
    {
        style: estiloNotificacion,
        className: `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}

    return (
      <div {...config}>
        { message }
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() => {
            setMessage('')
        }, 2500)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

//export default NotificationContext

export const useNotification = () => {
    return useContext(NotificationContext)
}