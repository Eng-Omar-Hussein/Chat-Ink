import plus from "../../Assets/plus-sign-icon-free-png 1.png";

export default function AddUser({ img, name }) {
  return (
    <div className="d-flex align-items-center my-5 ">
      <img src={img} alt="" className="me-4" />
      <span>{name}</span>
      <img
        src={plus}
        alt=""
        className="ms-auto"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
}
