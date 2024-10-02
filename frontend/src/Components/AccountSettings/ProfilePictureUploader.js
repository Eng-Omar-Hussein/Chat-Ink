import React, { useState, useRef } from 'react';
import ProfilePicture from '../../Assets/defaultPic.png'; 

const ProfilePictureUploader = () => {
    const [selectedImage, setSelectedImage] = useState(ProfilePicture);
    const fileInputRef = useRef(null); 

    const handleImageChange = (event) => {
        const file = event.target.files[0]; 
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result); 
            };
            reader.readAsDataURL(file); 
        }
    };

  
    const handleButtonClick = () => {
        fileInputRef.current.click(); 
    };

    return (
        <div className="col-7">
            <img
                src={selectedImage}
                style={{
                    borderRadius: "50%",
                    display: "block",
                    width: "200px",
                    height: "200px",
                    paddingUp : "20px"
                }}
                alt="Profile"
            />
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                ref={fileInputRef}
                style={{ display: 'none' }} 
            />
            <button 
                type="button" 
                className="btn btn-outline-secondary" 
                style={{ fontSize: "20px" , marginTop: "15px" , marginLeft:"-10px"}} 
                onClick={handleButtonClick} 
            >
                Change Profile Picture
            </button>
        </div>
    );
};

export default ProfilePictureUploader;
