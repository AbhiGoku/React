import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./Intro";
import ContactMe from "./ContactMe";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Intro />
                </li>
                <li className={` nav-item ${styles.li}`}>Resume</li>
                <li className={` nav-item ${styles.li}`}>My Career</li>
                <li className={` nav-item ${styles.li}`}>Project</li>
                <li className={` nav-item ${styles.li}`}>
                  <ContactMe />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
