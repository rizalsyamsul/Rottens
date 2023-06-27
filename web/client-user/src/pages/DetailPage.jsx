import { useParams } from "react-router";
import SidebarDetail from "../components/SidebarDetail";
import CastCard from "../components/CastCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesDetail } from "../store/actions/actionCreator";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMoviesDetail(id))
      .then(() => {})

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="row mt-2">
        <div className="col-4">
          <SidebarDetail />
        </div>
        {loading ? (
          <img className="col-8" src="https://i.gifer.com/YCZH.gif" alt="" />
        ) : (
          <div className="col-8 text-left">
            <div className="card p-2 rounded">
              <iframe
                width="auto"
                height="450"
                src={movie.trailerUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className=""
              ></iframe>
            </div>

            <div className="row  mt-1">
              <div className="col-3">
                <img src={movie.imgUrl} alt="" className="rounded" />
              </div>
              <div className="col-9">
                <div className="card bg-dark bg-gradient text-center text-white  justify-content-center h-100">
                  <h3>{movie.title}</h3>
                  <div className="row justify-content-center">
                    <div className="col-md-3 p-0">
                      <i className="bi bi-star">{movie.rating}%</i>
                    </div>
                    <div className="col-md-3 ">
                      <h5>{movie.Genre.name}</h5>
                    </div>
                  </div>

                  <p>{movie.synopsis}</p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h4>Casts</h4>

              {movie.Casts.length == 0 ? (
                <h5 className="text-center">Coming Soon</h5>
              ) : (
                <div className="d-flex align-content-start flex-wrap">
                  {movie.Casts.map((item) => (
                    <CastCard item={item} key={item.id} />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-3">
              <div className="card bg-light bg-gradient text-center text-black justify-content-center h-100">
                <p className="mt-3">created by: {movie.User.username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
