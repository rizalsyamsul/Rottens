import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editGenre } from "../store/actions/actionCreator";
export default function FormGenre({ genre, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setForm({
      name: genre.name,
    });
    setLoading(false);
  }, [genre]);

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
    <div className="col-md-6 pl-3">
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
    </div>
  );
}
