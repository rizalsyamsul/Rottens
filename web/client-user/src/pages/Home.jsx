import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions/actionCreator";
export default function Home(params) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchMovies())
      .then(() => {})

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://resizing.flixster.com/g73pOA15jI6xIl-LEXTq0PlExO0=/550x310/v2/https://images.fandango.com/cms/assets/e0779cc0-08a7-11ee-9d20-83ee649e98bd--550transformers-rise-beasts-bo1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Box Office: Transformers Opens to Solid $60 Million</h5>
                  <p>
                    Across the Spider-Verse also holds strong at $55 million
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://resizing.flixster.com/Jo1XnLlB07tepbU-YAzEiL9n3nE=/550x310/v2/https://images.fandango.com/cms/assets/79b362f0-0733-11ee-9577-b524031771c2--based-on-a-true-story-keyart-550x310.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    Kaley Cuoco's Latest Comedy Is 'Fresh' Out of the Gate
                  </h5>
                  <p>
                    Critics call Based on a True Story 'pleasingly perverse,'
                    but Tom Holland receives a blow with The Crowded Room
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://resizing.flixster.com/aSsvqmHE7NDUU4Y_HmYS_FnHuPQ=/550x310/v2/https://images.fandango.com/cms/assets/53d865c0-065d-11ee-81d8-51a487a38835--twistedmetal-s01-sneakpeek-screencap-550x310.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>
                    New Twisted Metal Video: Sweet Tooth and John Doe Bond Over
                    'Thong Song'
                  </h5>
                  <p>Anthony Mackie stars in the video game adaptation</p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-3 bg-image">
          <img
            src="https://resizing.flixster.com/bjfjToQ94gzuGxE8YDjuS9k7oFQ=/540x610/v2/https://images.fandango.com/cms/assets/bc782bb0-0734-11ee-9d20-83ee649e98bd--perry-mason-matthew-rhys-274x310.jpg"
            alt=""
            className="w-100"
          />
          <div className="overlay-text">
            <h5>Renewed & Canceled TV</h5>
          </div>
        </div>
        <div className="col-3 bg-image">
          <img
            src="https://resizing.flixster.com/kYRLDEDO-UxcBx5Jr9cOWFjGR0o=/540x610/v2/https://images.fandango.com/cms/assets/ada6b2b0-c4f8-11ed-9577-b524031771c2--fast-x.jpg"
            alt=""
            className="w-100"
          />
          <div className="overlay-text">
            <h5>Buckle Up</h5>
          </div>
        </div>
      </div>

      {loading ? (
        <img src="https://i.gifer.com/YCZH.gif" alt="" />
      ) : (
        <div>
          <h2>Featured Movies</h2>
          <div className="d-flex align-content-start flex-wrap">
            {movies.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
