import Logo from '../Assets/Logo.png'
import defaultPic from '../Assets/defaultPic.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import NotificationManager from '../Components/Notifications/NotificationManager';
const text = { fontSize: "32", fontWeight: "700", color: "black" };

const notifications = [
    {
        name:"Salma Hazem" , 
        picture:defaultPic  , 
        request:true
    },

    {
        name:"Rahma Ali" , 
        picture:defaultPic  , 
        request:false
    }, 

    {
        name:"Moaz Adly" , 
        picture:defaultPic  , 
        request:true
    }, 
    
    {
        name:"Omar Hussien" , 
        picture:defaultPic  , 
        request:false
    } 

];



function Notifications () 
{  
    const navigate = useNavigate();

    const [notification, setNotifications] = useState(notifications); 
    const [successMessage, setSuccessMessage] = useState(''); 

    const deleteNotification =(user) =>
    {
        const modifiedNotifications = notification.filter(notif => notif.name !== user.name);
        setNotifications(modifiedNotifications)
        
    }
    const acceptRequest=(user)=>
        {
           deleteNotification(user)
           setSuccessMessage(`You've added ${user.name}`);
           setTimeout(() => setSuccessMessage(''), 3000);
           //back end code to add that new friend
        };

        const viewMessage = (user) =>
        {
            deleteNotification(user)
            navigate('/'); //navigate to the chat
        };
    
        const rejectRequest =(user)=>
        {
            deleteNotification(user)
            //backend code so that he can add again
        }

   return (
    <div className="container">

         <div className='col-12 d-flex align-items-center pt-3 mt-3'>
            <img src={Logo} alt="logo" width={77} height={58} />
            <div style={text}>ChatLink</div>
            <nav></nav>
        </div>

        <p style={{fontWeight :"bold", paddingTop:"60px" , fontSize :"30px"}}>Notifications</p>

        {successMessage && (
                <p style={{ color: 'green', fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>
                    {successMessage}
                </p>
            )}

        <div>
            {notification.map((user, index) => 
            (
                <NotificationManager 
                key={index}
                name={user.name} 
                picture={user.picture} 
                request={user.request} 
                acceptRequest={acceptRequest}
                viewMessage={viewMessage}
                rejectRequest={rejectRequest}
                user={user}
                />
            ))}
        </div>
    </div>
        
    )
}

export default Notifications;
