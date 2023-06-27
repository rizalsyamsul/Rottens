import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGenre } from "../store/actions/actionCreator";
export default function AddGenre() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let payload = { name: form.name };
      dispatch(addGenre(payload));
      await Swal.fire({
        title: "sucess",
        text: "new genre added",
        icon: "success",
        confirmButtonText: "Okay",
      });
      navigate("/genre");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">Add new Genre</h1>
        </div>

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
                placeholder="Enter genre name"
              />
            </div>

            <div className="btn-container mt-3">
              <button type="submit" className="btn btn-primary">
                Add New Genre
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
