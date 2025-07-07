import mountblueImg from "../../assets/SpringBoot.png";
import move37Img from "../../assets/DotNet.png";

export default function WorkLayout() {
  return (
    <div className="container">
      <section className="work" id="work">
        <div className="wrapper">
          <div className="top">
            <div className="title" data-aos="zoom-in" data-aos-duration="1000">
              <h3>Work</h3>
            </div>
            <div className="portfolio">

              {/* MountBlue Technologies */}
              <div className="row">
                <div className="col-left" data-aos="flip-left" data-aos-duration="1000">
                  <div className="imgbox">
                    <img src={mountblueImg} alt="MountBlue Technologies - Dishant Dua" />
                  </div>
                </div>
                <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                  <p className="featured">MountBlue Technologies</p>
                  <h4 className="project-title">SDE Trainee</h4>
                  <div className="box">
                    <p>
                      Built full-stack applications using <span>Spring Boot</span>, <span>Java</span>, and <span>MySQL</span>. Developed a <strong>blog platform</strong> and a <strong>Zoom clone</strong> with real-time communication features like video, chat, and screen sharing.
                    </p>
                  </div>
                  <div className="bottom">
                    <ul className="text-list">
                      <li>Spring Boot</li>
                      <li>Java</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Move37 Capital */}
              <div className="row rowsecond">
                <div className="col-left second" data-aos="flip-right" data-aos-duration="1000">
                  <div className="imgbox">
                    <img src={move37Img} alt="Move37 Capital - Dishant Dua" />
                  </div>
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
