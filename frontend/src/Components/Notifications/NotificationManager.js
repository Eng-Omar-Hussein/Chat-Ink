import defaultPic from "../../Assets/defaultPic.png";
const NotificationManager = (props) => {
  const {
    name,
    picture,
    request,
    acceptRequest,
    viewMessage,
    rejectRequest,
    user,
  } = props;
  return (
    <div className="notification" style={{ paddingTop: "30px" }}>
      <div
        style={{
          display: "flex",
          paddingTop: "40px",
          marginLeft: "180px",
          paddingLeft: "120px",
        }}
      >
        <img
          src={picture}
          width={77}
          height={58}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />

        <div>
          <p
            style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "70px" }}
          >
            {" "}
            {name}
          </p>
          <p
            style={{ marginTop: "-10px", fontSize: "20px", marginLeft: "50px" }}
          >
            {" "}
            {request ? "Sent a friend request" : "Sent a new message"}
          </p>
        </div>

        <div
          className="col col-lg-2"
          style={{ display: "flex", paddingLeft: "160px", gap: "25px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {!request && (
              <button
                className="btn btn-outline-secondary my-3"
                onClick={() => viewMessage(user)}
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "20px",
                  whiteSpace: "nowrap",
                  backgroundColor: "#6FB1B6",
                  width: "200px",
                  border: "none",
                }}
              >
                {" "}
                View Message{" "}
              </button>
            )}
            {request && (
              <>
                <button
                  className="btn btn-outline-secondary my-3"
                  onClick={() =>
                    request ? acceptRequest(user) : viewMessage(user)
                  }
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bolder",
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    backgroundColor: "#6FB1B6",
                    border: "none",
                  }}
                >
                  Accept
                </button>

                <button
                  className="btn btn-outline-secondary my-3"
                  onClick={() => rejectRequest(user)}
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                    borderColor: "black",
                    backgroundColor: "grey",
                    border: "none",
                  }}
                  disabled={!request}
                >
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationManager;
