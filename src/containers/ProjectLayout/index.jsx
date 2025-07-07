export default function ProjectsLayout() {
  return (
      <div className="container">
        <section className="projects" id="projects">
          <div className="wrapper">
            <div className="top">
              <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                <h3>Projects</h3>
              </div>
              <div className="portfolio">
  
                {/* MountBlue Technologies */}
                <div className="row">
                  <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                  <p className="featured">Featured Project</p>
                  <h4 className="project-title">Blog Platform</h4>
                    <div className="box">
                      <p>
                      Developed a full-stack blog application using <span>Spring Boot</span>, <span>Thymeleaf</span>, and <span>MySQL</span> with user authentication, comment management, and full CRUD support.
                    </p>
                    </div>
                    <div className="bottom">
                      <ul className="text-list">
                        <li>Spring Boot</li>
                      <li>Thymeleaf</li>
                      <li>MySQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
                {/* Move37 Capital */}
                <div className="row rowsecond">
                  <div className="col-left second" data-aos="flip-right" data-aos-duration="1000">
                  </div>
                  <div className="col-right second" data-aos="zoom-in" data-aos-duration="1000">
                    <p className="featured">Move37 Capital</p>
                    <h4 className="project-title">Software Engineer</h4>
                    <div className="box">
                      <p>
                        Engineered backend tools using <span>C#</span>, <span>.NET</span>, and <span>SQL Server</span> to automate trade data workflows and batch processing. Also built internal utilities and explored <span>AI/ML</span> using Python for data automation and computer vision research.
                      </p>
                    </div>
                    <div className="bottom">
                      <ul className="text-list">
                        <li>C# / .NET</li>
                        <li>SQL Server</li>
                        <li>Python</li>
                      </ul>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  