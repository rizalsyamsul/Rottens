import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <div className="bg-danger text-white">
        <div className="d-flex flex-row-reverse">
          <div className="p-2 fw-bold">LOGIN/SIGNUP</div>
          <div className="p-2 fw">
            <a href="https://www.rottentomatoes.com/critics">Critics</a>
          </div>
          <div className="p-2 fw">
            <a href="https://www.rottentomatoes.com/about#whatisthetomatometer">
              What's the Tomatometer®?
            </a>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div>
            <Link to="/">
              <img src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" />
            </Link>
          </div>
          <div>
            <div className="input-group">
              <span className="input-group-text border-0" id="search-addon">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                placeholder="Search movies, Tv, actors, more..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </div>
          </div>

          <div className="d-flex flex-row-reverse">
            <div className="p-2 fw-bold">
              <a>SHOWTIMES</a>
            </div>
            <div className="p-2 fw-bold">
              <a>NEWS</a>
            </div>
            <div className="p-2 fw-bold">
              <a>MOVIE TRIVIA</a>
            </div>
            <div className="p-2 fw-bold">
              <NavLink
                to="/detail/2"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                DETAIL
              </NavLink>
            </div>
            <div className="p-2 fw-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                MOVIES
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary small text-white">
        <div className="d-flex flex-row">
          <div className="p-2 fw-bold text-warning">
            <a>TRENDING ON RT</a>
          </div>
          <div className="p-2 fw-bold">
            <a>Transformer: Rise of beast Review</a>
          </div>
          <div className="p-2 fw-bold">
            <a>Watch Fast X</a>
          </div>
          <div className="p-2 fw-bold">
            <a>The Flash</a>
          </div>
          <div className="p-2 fw-bold">
            <a>June Streaming Guide</a>
          </div>
        </div>
      </div>
    </header>
  );
}
