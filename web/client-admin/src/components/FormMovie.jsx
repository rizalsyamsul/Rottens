import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editMovie } from "../store/actions/actionCreator";
export default function FormMovie({ genres, movie, id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    genreId: "",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (movie) {
      setForm({
        title: movie.title,
        synopsis: movie.synopsis,
        trailerUrl: movie.trailerUrl,
        imgUrl: movie.imgUrl,
        rating: movie.rating,
        genreId: movie.genreId,
        userId: movie.userId,
      });
      setLoading(false);
    }
  }, [movie]);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let payload = {
        title: form.title,
        slug: form.title + "-6661",
        synopsis: form.synopsis,
        trailerUrl: form.trailerUrl,
        imgUrl: form.imgUrl,
        rating: form.rating,
        genreId: Number(form.genreId),
        userId: 2,
      };
      await dispatch(editMovie(payload, id));
      await Swal.fire({
        title: "sucess",
        text: "movie edited",
        icon: "success",
        confirmButtonText: "Okay",
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return (
      <div className="col-md-6 pl-3 text-center">
        <img src="https://i.gifer.com/YCZH.gif" alt="" />
      </div>
    );
  }
  return (
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
            cols="71"
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
            name="imageUrl"
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
          <select name="genreId" value={form.genreId} onChange={handleChange}>
            <option value="" selected disabled>
              --Select Genre--
            </option>
            {genres.map((item) => {
              return (
                <option
                  selected={item.id == form.genreId}
                  value={item.id}
                  key={item.id}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="btn-container mt-3">
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
