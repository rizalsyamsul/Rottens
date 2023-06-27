import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, fetchGenre } from "../store/actions/actionCreator";

export default function AddMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genre);
  const [user, setUser] = useState([]);
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    genreId: "",
  });
  const [error, setError] = useState("");
  const [castForm, setCastForm] = useState([
    {
      name: "",
      profilePict: "",
    },
    {
      name: "",
      profilePict: "",
    },
  ]);

  useEffect(() => {
    dispatch(fetchGenre());
  }, []);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleChangeCast(index, event) {
    let newCast = [...castForm];
    newCast[index] = {
      ...newCast[index],
      [event.target.name]: event.target.value,
    };
    setCastForm(newCast);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!castForm[0].name || !castForm[1].name) {
      return setError("Input The Cast");
    }
    let payload = {
      title: form.title,
      slug: form.title,
      synopsis: form.synopsis,
      trailerUrl: form.trailerUrl,
      imgUrl: form.imgUrl,
      rating: form.rating,
      genreId: Number(form.genreId),
      casts: castForm,
    };
    console.log(payload);
    console.log(payload.casts);
    dispatch(addMovie(payload));
    await Swal.fire({
      title: "sucess",
      text: "new movie added",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/");
  }

  function addCastClick(e) {
    console.log(castForm);
    const newCast = {
      name: "",
      profilePict: "",
    };
    setCastForm([...castForm, newCast]);
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">Add new Movie</h1>
        </div>
        <div className="row">
          <div className="col-md-6 pl-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group mb-3">
                <label>Synopsis</label>
                <br />
                <textarea
                  onChange={handleChange}
                  name="synopsis"
                  value={form.synopsis}
                  rows="4"
                  cols="69"
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label>Trailer Url</label>
                <input
                  type="text"
                  name="trailerUrl"
                  className="form-control"
                  value={form.trailerUrl}
                  onChange={handleChange}
                  placeholder="Enter trailerUrl"
                />
              </div>
              <div className="form-group mb-3">
                <label>Image Url</label>
                <input
                  type="url"
                  name="imgUrl"
                  className="form-control"
                  value={form.imgUrl}
                  onChange={handleChange}
                  placeholder="Enter imageUrl"
                />
              </div>
              <div className="form-group mb-3">
                <label>Rating</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  value={form.rating}
                  onChange={handleChange}
                  placeholder="Enter rating"
                />
              </div>
              <div className="form-group mb-3">
                <label>Genre</label> <br />
                <select
                  name="genreId"
                  value={form.genreId}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    --Select Genre--
                  </option>
                  {genres.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="btn-container mt-3">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 pl-5">
            <h3>Casts</h3>
            {error && <div className="alert alert-danger"> {error}</div>}
            {castForm.map((el, index) => (
              <form key={index}>
                <h5>Cast #{index + 1}</h5>
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={castForm.name}
                    onChange={(event) => handleChangeCast(index, event)}
                    placeholder="Enter Cast Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Profile Picture</label>
                  <input
                    type="url"
                    name="profilePict"
                    className="form-control"
                    value={castForm.profilePict}
                    onChange={(event) => handleChangeCast(index, event)}
                    placeholder="Enter Profile Picture"
                    required
                  />
                </div>
              </form>
            ))}

            <div className="btn-container mt-3">
              <button onClick={addCastClick} className="btn btn-success">
                Add Cast
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
