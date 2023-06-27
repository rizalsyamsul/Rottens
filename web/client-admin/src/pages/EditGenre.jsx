import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  editGenre,
  fetchGenre,
  fetchGenreById,
} from "../store/actions/actionCreator";
import FormGenre from "../components/FormGenre";

export default function EditGenre() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { genre } = useSelector((state) => state.genre);
  const [form, setForm] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchGenreById(id));
    setLoading(false);
  }, []);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let payload = { name: form.name };
      console.log(payload);
      await dispatch(editGenre(payload, id));
      await Swal.fire({
        title: "sucess",
        text: "genre edited",
        icon: "success",
        confirmButtonText: "Okay",
      });
      navigate("/genre");
    } catch (error) {
      console.log(error);
    }
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
          <h1 className="h3 mb-0 text-gray-800">Edit Genre</h1>
        </div>
        <FormGenre genre={genre} id={id} />
        {/* <div className="col-md-6 pl-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="enter genre"
              />
            </div>

            <div className="btn-container mt-3">
              <button type="submit" className="btn btn-primary">
                Edit Genre
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </section>
  );
}
