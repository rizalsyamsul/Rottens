export default function SidebarDetail() {
  return (
    <div className="card">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="theater-tab"
            data-bs-toggle="tab"
            data-bs-target="#theater"
            type="button"
            role="tab"
            aria-controls="theater"
            aria-selected="true"
          >
            Theater
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="streaming-movies-tab"
            data-bs-toggle="tab"
            data-bs-target="#streaming-movies"
            type="button"
            role="tab"
            aria-controls="streaming-movies"
            aria-selected="false"
          >
            Streaming Movies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="tv-shows-tab"
            data-bs-toggle="tab"
            data-bs-target="#tv-shows"
            type="button"
            role="tab"
            aria-controls="tv-shows"
            aria-selected="false"
          >
            TV Shows
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="theater"
          role="tabpanel"
          aria-labelledby="theater-tab"
        >
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Soul Doctor</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>National Theater Live: Good</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Glow</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 72%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Flash</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 80%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Elemental</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 69%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Asteroid City</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Blackening</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 50%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Maggie Moore</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 55%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Nobody Hero</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 68%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Little Mermaid</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 96%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Spiderman: Accross the Spider Verse</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 52%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Transformer: Rise of the beast</p>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="streaming-movies"
          role="tabpanel"
          aria-labelledby="streaming-movies-tab"
        >
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Soul Doctor</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>National Theater Live: Good</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Glow</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 72%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Flash</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 80%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Elemental</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 69%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Asteroid City</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Blackening</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 50%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Maggie Moore</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 55%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Nobody Hero</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 68%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Little Mermaid</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 96%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Spiderman: Accross the Spider Verse</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 52%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Transformer: Rise of the beast</p>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tv-shows"
          role="tabpanel"
          aria-labelledby="tv-shows-tab"
        >
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Soul Doctor</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>National Theater Live: Good</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Glow</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 72%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Flash</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 80%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Elemental</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 69%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Asteroid City</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> --</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Blackening</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 50%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Maggie Moore</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 55%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Nobody Hero</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 68%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>The Little Mermaid</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 96%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Spiderman: Accross the Spider Verse</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 text-center ">
              <i className="bi bi-ticket-perforated"> 52%</i> <br />
            </div>
            <div className="col-md-6 text-left ">
              <p>Transformer: Rise of the beast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
