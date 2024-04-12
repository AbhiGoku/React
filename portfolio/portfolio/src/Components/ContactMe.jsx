import "bootstrap/dist/css/bootstrap.min.css";

import styles from "./ContactMe.module.css";
function ContactMe() {
  return (
    <>
      <button
        className={`btn btn-primary ${styles.contactMe}`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Like what you see?
      </button>

      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasBottomLabel">
            I am happy to connect. Drop by your details.
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body small"></div>
      </div>
    </>
  );
}

export default ContactMe;
