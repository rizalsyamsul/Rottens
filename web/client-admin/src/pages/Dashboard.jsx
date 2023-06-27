import { useEffect, useState, useRef } from "react";
import Tablerow from "../components/Tablerow";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, fetchMovies } from "../store/actions/actionCreator";
export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovies())
      .then(() => {})

      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleAddMovie(e) {
    navigate("/newMovie");
  }
  async function handleDelete(id) {
    dispatch(deleteMovie(id));
    await Swal.fire({
      title: "sucess",
      text: `movie with id ${id} deleted`,
      icon: "success",
      confirmButtonText: "Okay",
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
          <h1 className="h3 mb-0 text-gray-800">List of All Movies</h1>
          <button onClick={handleAddMovie} className="btn btn-primary p-3">
            Add New Movie
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="text-center">
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Image</th>
                <th>slug</th>
                <th>Synopsis</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {movies.map((item, index) => (
                <Tablerow
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
