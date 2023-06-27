import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesDetail } from "../store/actions/actionCreator";
import FormMovie from "../components/FormMovie";
export default function EditMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { genres } = useSelector((state) => state.genre);
  const { movie } = useSelector((state) => state.movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesDetail(id));
    setLoading(false);
  }, []);

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
          <h1 className="h3 mb-0 text-gray-800">Edit Movie</h1>
        </div>
        <FormMovie genres={genres} movie={movie} id={id} />
      </div>
    </section>
  );
}
