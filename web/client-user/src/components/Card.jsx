import { useNavigate } from "react-router-dom";
export default function Card({ item }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/detail/${item.id}`);
  }

  return (
    <div className="col-2 mb-3 p-2">
      <div onClick={handleClick} className="card">
        <img
          src={item.imgUrl}
          className="card-img-top w-100"
          alt="Movie Poster"
        />
        <div className="card-body text-left">
          <i className="bi bi-ticket-perforated"> {item.rating}%</i> <br />
          <a onClick={handleClick} className="text-black ">
            {item.title}
          </a>
        </div>
      </div>
    </div>
  );
}
