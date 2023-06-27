import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMoviesDetail } from "../store/actions/actionCreator";
export default function Tablerow({ item, handleDelete, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function deleteData() {
    handleDelete(item.id);
  }
  function handleEdit(e) {
    e.preventDefault();
    navigate(`/editMovie/${item.id}`);
  }
  return (
    <tr className="text-left">
      <td>{index + 1}</td>
      <td>{item.title}</td>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.slug}</td>
      <td>{item.synopsis}</td>
      <td>{item.rating}%</td>
      <td>{item.Genre.name}</td>
      <td>{item.User.username}</td>
      <td>
        <button onClick={handleEdit} className="btn btn-secondary mb-3">
          Edit
        </button>
        <button onClick={deleteData} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
