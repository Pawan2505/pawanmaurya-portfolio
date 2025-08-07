import React from 'react'
import logo from "./assets/img/brands/logo.png"
import "./assets/css/style.css"
import home from "./assets/img/brands/home-right.png"
import about from "./assets/img/about-us.png"
import w1 from "./assets/img/brands/logo1.jpeg"
import w2 from "./assets/img/brands/logo2.jpeg"
import w3 from "./assets/img/brands/logo3.jpeg"
import w4 from "./assets/img/brands/logo4.jpeg"
import s1 from "./assets/img/services/s1.png"
import s2 from "./assets/img/services/s2.png"
import s3 from "./assets/img/services/s3.png"
import s4 from "./assets/img/services/s4.png"
import p1 from "./assets/img/projeact/pw.png"

function App() {
  return (
    <>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h">
                Pawan Maurya
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#project">
                      Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="home_banner_area" id="home">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hello</h3>
                  <h1 className="text-uppercase">I am Pawan Maurya</h1>
                  <h5 className="text-uppercase">
                    MERN Stack Developer | Full-Stack Web Development
                  </h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#">
                      <span>Hire Me</span>
                    </a>
                    <a
                      className="primary_btn tr-bg"
                      href="https://media.licdn.com/dms/document/media/v2/D562DAQHZEfuQ5gYlVA/profile-treasury-document-pdf-analyzed/B56ZdpWfiNHUAc-/0/1749819195770?e=1752105600&v=beta&t=ZeL2WTYJOSd66THHATdpl72FDmZzakUBRmDJzTtZYYQ"
                      target="_blank"
                    >
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img src={home} alt="" className="home_right_image" height={600}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about_area section_gap" id="about">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img src={about} alt="" className="about_image" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>Let’s Introduce About Myself</h2>
                <p>
                  I'm a passionate MERN Stack Developer dedicated to building
                  impactful web applications that solve real-world problems. With a
                  strong foundation in full-stack development, I create engaging,
                  secure, and efficient digital solutions that enhance user
                  experience and business operations.
                </p>
                <ul className="list_style">
                  <li className="about_list_item">
                    ✅ Launched a secure MERN-based payment app with JWT
                    authentication.
                  </li>
                  <li className="about_list_item">
                    ✅ Built an interactive eLearning platform serving hundreds of
                    users.
                  </li>
                  <li className="about_list_item">
                    ✅ Optimized an Inventory Management System to meet military
                    standards.
                  </li>
                  <li className="about_list_item">
                    ✅ Developed inclusive curriculums at Red and White Education.
                  </li>
                  <li className="about_list_item">
                    ✅ Created real-time reporting tools for better decision-making.
                  </li>
                </ul>
                <p>
                  <strong>Core Skills:</strong> MERN Stack | Security Best Practices
                  | Agile Development | Data Optimization | Mentorship
                  <br />
                  <strong>Technical Expertise:</strong> JavaScript, C/C++, C#,
                  React.js, .NET, Spring, MySQL, MongoDB.
                </p>
                <a
                  className="primary_btn"
                  href="https://media.licdn.com/dms/document/media/v2/D562DAQHZEfuQ5gYlVA/profile-treasury-document-pdf-analyzed/B56ZdpWfiNHUAc-/0/1749819195770?e=1752105600&v=beta&t=ZeL2WTYJOSd66THHATdpl72FDmZzakUBRmDJzTtZYYQ"
                  target="_blank"
                >
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brand_area section_gap_bottom" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={w1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={w2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={w3} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={w4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">3+</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <span className="fa fa-phone" />
                  <div className="ml-15">
                    <p>Call us now</p>
                    <h3>+91 9027297231</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>Service Experience</h2>
                <p>
                  I offer full-stack development services focused on performance,
                  design, and business value.
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={s1} alt="" />
                <h4>Full Stack Developer</h4>
                <p>
                  Promoted to Full Stack Developer after 1+ year as a Front-End
                  Developer
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={s2} alt="" />
                <h4>Associate Software Developer</h4>
                <p>
                  • Worked on developing an Inventory Management System using
                  ASP.NET for military asset management.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={s3} alt="" />
                <h4>
                  SDE Intern <br />
                  <br />
                  PW (PhysicsWallah)
                </h4>
                <p>
                  • Worked on developing an Inventory Management System using
                  ASP.NET for military asset management.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={s4} alt="" />
                <h4>Software Developer</h4>
                <p>
                  • Contributed to the development of an online food ordering
                  platform using web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio_area" id="project">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-left">
                <h2>
                  Quality Work <br /> Recently Done Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src=""
                      alt=""
                    />
                    <div className="overlay" />
                    <a href="" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="#">EdTech Application</a>
                    </h4>
                    <br />
                    <p>
                      Created a scalable eLearning platform using Dot Net and SQL
                      Server, featuring interactive modules and tools with a
                      user-friendly interface for educators and learners. <br />
                      <br />
                      Skills: Version Control &amp; Collaboration · Security &amp;
                      Authentication · MS SQL Server · ASP.NET MVC
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all popular">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src={p1}
                      alt=""
                    />
                    <div className="overlay" />
                    <a href="img/portfolio/p2.jpg" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="https://physics-wallah-notes.vercel.app/">PhysicsWallah</a>
                    </h4>
                    <br />
                    <p>
                      Created a robust Note Application using React.js, enhancing
                      user engagement and increasing usage rates within the first
                      month. Prioritized user experience by crafting an intuitive
                      UI/UX design, leading to increased user satisfaction ratings
                      based on feedback. Leveraged local storage for effective data
                      storage and management, ensuring reliable data integrity and
                      accessibility within the application. Created a robust Note
                      Application using React.js, enhancing user engagement and
                      increasing usage rates within the first month. Prioritized
                      user experience by crafting an intuitive UI/UX design, leading
                      to increased user satisfaction ratings based on feedback.
                      Leveraged local storage for effective data storage and
                      management, ensuring reliable data integrity and accessibility
                      within the application. <br />
                      <br />
                      Skills: MERN Stack Development · Front-End Development ·
                      Version Control &amp; Collaboration · Debugging &amp;
                      Troubleshooting
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all latest">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img
                      className="img-fluid w-100"
                      src=""
                      alt=""
                    />
                    <div className="overlay" />
                    <a href="" className="img-gal">
                      <div className="icon">
                        <span className="lnr lnr-cross" />
                      </div>
                    </a>
                  </div>
                  <div className="short_info">
                    <h4>
                      <a href="#">Payment Gateway</a>
                    </h4>{" "}
                    <br />
                    <p>
                      Developed a secure MERN-based payment application with a
                      React.js frontend, integrated a payment gateway, implemented
                      JWT authentication, and built RESTful APIs for data
                      processing. Developed a secure MERN-based payment application
                      with a React.js frontend, integrated a payment gateway,
                      implemented JWT authentication, and built RESTful APIs for
                      data processing. <br />
                      <br />
                      Skills: HTML5 · JavaScript · Express.js · MongoDB · MERN Stack
                      Development · Version Control &amp; Collaboration · Security
                      &amp; Authentication · React.js · Nodejs · Cascading Style
                      Sheets (CSS)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_area section_gap" id="contact">
        <div className="container">
          <div className="main_title text-center">
            <h2 className="text-uppercase">Contact Info</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="admin-info p-4 border rounded shadow-sm h-100">
                <h4>Contact Details</h4>
                <p>
                  <i className="fas fa-envelope"></i>{" "}
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Pawan1800054@akgec.ac.in">Pawan1800054@akgec.ac.in</a>
                </p>
                <p>
                  <i className="fas fa-phone"></i>{" "}
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919027297231">+91 9027297231</a>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i>{" "}
                  <strong>Address:</strong> 123, Main Street, Rajkot, Gujarat
                </p>
                <p>
                  <i className="fab fa-linkedin"></i>{" "}
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/pawan2505/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/pawanmaurya1800
                  </a>
                </p>
                <p>
                  <i className="fab fa-github"></i>{" "}
                  <strong>GitHub:</strong>{" "}
                  <a
                    href="https://github.com/Pawan2505"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/pawanmaurya1800
                  </a>
                </p>
                <p>
                  <i className="fas fa-envelope-open-text"></i>{" "}
                  <strong>Gmail:</strong>{" "}
                  <a href="mailto:Pawan1800054@akgec.ac.in">Pawan1800054@akgec.ac.in</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="contact_form p-4 border rounded shadow-sm h-100" id="contactForm" noValidate>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="primary_btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  
  )
}

export default App
