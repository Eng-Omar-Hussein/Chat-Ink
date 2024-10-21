import React from "react";

const CardComponent = (props) => {  
    const { groupName, groupPic } = props;

    return (
        <div className="mb-4" style={{marginTop:"10px"}}> 
            <div className="card" style={{ width: "18rem" }}>
                <img src={groupPic} style={{width:"100px" , height:"100px" , marginLeft:"90px", marginTop:"20px"}} className="card-img-top" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title" style={{marginLeft :"55px" , marginBottom:"30px"}}>{groupName}</h5>
                    <a href="#" className="btn btn-primary" style={{ color: "white", backgroundColor: "#6FB1B6", marginLeft: "70px" }}>
                        Join Group
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
