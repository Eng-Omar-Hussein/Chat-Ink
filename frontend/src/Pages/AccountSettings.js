import React from "react";
import FormPlus from "../Components/signUp/FormPlus";
import ProfilePictureUploader from "../Components/AccountSettings/ProfilePictureUploader";
const text = { fontSize: "32", fontWeight: "700", color: "black" };

function AccountSettings() {
  return (
    <div className="mb-5">
      <div className="container d-flex flex-column align-items-center">
       
        <div className="col-12 d-flex flex-column align-items-center">
            <h1 style={{ fontSize: "25px", marginTop: "40px" }}>
              Account Settings
            </h1>
          
        </div>
     
       
          <div className="col-12 d-flex flex-column align-items-center">
            <ProfilePictureUploader />
          </div>
        </div>
     

      <div className="d-flex flex-column align-items-center">
        <FormPlus edit={true} />
      </div>
    </div>
  );
}

export default AccountSettings;
