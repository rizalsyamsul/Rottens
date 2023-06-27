import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGenreById } from "../store/actions/actionCreator";
export default function TablerowGenre({ item, handleDelete, index }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function deleteData() {
    handleDelete(item.id);
  }

  function handleEdit(e) {
    e.preventDefault();
    navigate(`/editGenre/${item.id}`);
  }
  return (
    <tr className="text-center ">
      <td>{index + 1}</td>
      <td>
        <h5>{item.name}</h5>
      </td>
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
