export default function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="d-flex justify-content-around align-items-stretch">
        <div>
          <p>Help</p>
          <p>About Rotten Tomatoes</p>
          <p>What's The Tomatometer?</p>
        </div>

        <div>
          <p>Critic Submission</p>
          <p>Licensing</p>
          <p>Adervtise with US</p>
          <p>Careers</p>
        </div>

        <div className="text-center">
          <h5>JOIN THE NEWSLETTER</h5>
          <p>
            Get the freshest reviews, news, <br /> and more delivered right to
            your inbox!
          </p>
          <button className="btn btn-primary">JOIN THE NEWSLETTER</button>
        </div>

        <div>
          <h5 className="mb-3">FOLLOW US</h5>
          <a
            href="https://www.facebook.com/rottentomatoes"
            className="p-2 text-decoration-none"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://twitter.com/el_lusmas"
            className="p-2 text-decoration-none"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/rizalsyamsull"
            className="p-2 text-decoration-none"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.pinterest.com/rottentomatoes"
            className="p-2 text-decoration-none"
          >
            <i className="bi bi-pinterest"></i>
          </a>
          <a
            href="https://www.youtube.com/user/rottentomatoes"
            className="p-2 text-decoration-none"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
      </div>
      <p className="text-center fw-bold">
        &copy; 2023 Jonquil Fox. All rights reserved.
      </p>
    </footer>
  );
}
