export default function NotFound() {
    return (
        <>
        <section className="not-found-banner">
          <div className="container">
            <div className="row">
              <div className="banner-text">
                <h1>Not Found</h1>
              </div>
            </div>
          </div>
          <div className="svg-shape">
            <div style={{ height: "100px", overflow: "hidden" }}>
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: "100px", width: "100%" }}
              >
                <path
                  d="M-30.31,-15.90 C143.43,72.09 307.18,87.08 536.56,-16.90 L511.56,154.09 L-7.81,153.09 Z"
                  style={{ stroke: "none", fill: " rgb(255, 255, 255)" }}
                ></path>
              </svg>
            </div>
          </div>
        </section>
        <section className="not-found">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="entry-content">
                  <h2>404</h2>
                  <h4>
                    Apologies, but the page you requested could not be found.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  