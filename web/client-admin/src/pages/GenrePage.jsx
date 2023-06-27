import { useEffect, useState, useRef } from "react";
import TablerowGenre from "../components/TablerowGenre";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteGenre, fetchGenre } from "../store/actions/actionCreator";
export default function GenrePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { genres, msg } = useSelector((state) => state.genre);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchGenre())
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleAddGenre(e) {
    e.preventDefault();
    navigate("/newGenre");
  }
  function handleDelete(id) {
    dispatch(deleteGenre(id))
      .then(() => {
        dispatch(fetchGenre());
      })
      .then(() => {
        Swal.fire({
          title: "sucess",
          text: "deleted",
          icon: "success",
          confirmButtonText: "Okay",
        });
      });
  }

  if (loading) {
    return (
      <div className="col-md-10 text-center">
        <img src="https://i.gifer.com/YCZH.gif" alt="" />
      </div>
    );
  }
  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">List of All Genres</h1>
          <button onClick={handleAddGenre} className="btn btn-primary p-3">
            Add New Genre
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="text-center">
              <tr>
                <th width="60px">No</th>
                <th>Name</th>
                <th width="60px">Action</th>
              </tr>
            </thead>

            <tbody>
              {genres.map((item, index) => (
                <TablerowGenre
                  item={item}
                  index={index}
                  key={item.id}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
