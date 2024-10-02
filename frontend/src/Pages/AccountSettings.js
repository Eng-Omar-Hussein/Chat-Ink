import React from 'react'
import FormPlus from '../Components/signUp/FormPlus';
import Logo from '../Assets/Logo.png'
import ProfilePictureUploader from '../Components/AccountSettings/ProfilePictureUploader'
const text = { fontSize: "32", fontWeight: "700", color: "black" };

function AccountSettings() {
return (

    <div className="container">

      <div className='col-12 d-flex align-items-center pt-3 mt-3'>
        <img src={Logo} alt="logo" width={77} height={58} />
        <div style={text}>ChatLink</div>
      </div>

     
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 style={{ fontSize: "25px" , marginTop: "40px" }}>Account Settings</h1>
                </div>

                <div className="col-7">
                   <ProfilePictureUploader/>
                </div>
            </div>
        </div>

      <div className="d-flex flex-column align-items-center">
        <FormPlus edit={true}/>
        
        </div>
        

    </div>
  )
}

export default AccountSettings;