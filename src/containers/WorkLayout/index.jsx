import image1 from "../../assets/Spring.png";
import image2 from "../../assets/Developer.png";

export default function WorkLayout(){
    return(
        < div className="container">
            <section className="work " id="work">
                    <div className="wrapper">
                        <div className="top">
                            <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                                <h3>Work</h3>
                            </div>
                            <div className="portfolio">
                                <div className="row">
                                    <div className="col-left " data-aos="flip-left"  data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image2} alt="Mountblue Technologies" />
                                        </div>
                                    </div>
                                    <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                                        <h4 className="project-title">Move37 Capital | May 2024 - Present</h4>
                                        <div className="box">
                                            <ul>
                                              <li>Built backend modules for fintech tools, cutting trade processing time.</li>
                                              <li>Designed and deployed <span>REST APIs</span> for managing internal operations and trade data.</li>
                                              <li>Created scheduled console apps for batch jobs, minimizing manual steps and ensuring reliability.</li>
                                              <li>Optimized <span>SQL Server</span> queries and stored procedures for high-volume datasets.</li>
                                              <li>Explored <span>Vision Transformer</span> models and built data preparation tools using Python (Spyder IDE).</li>
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>.NET / C#</li>
                                                <li>SQL Server</li>
                                                <li>Python</li>
                                            </ul>
                                            <div className="icons">
                                                <a href="https://move37capital.com/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowsecond">
                                    <div className="col-left second" data-aos="flip-right" data-aos-duration="1000">
                                        <div className="imgbox">
                                            <img src={image1} alt="photoshop - arjun chhetri" />
                                        </div>
                                    </div>
                                    <div className="col-right second" data-aos="zoom-in" data-aos-duration="1000">
                                        <h4 className="project-title">Mountblue Technologies | Jan – May 2024</h4>
                                        <div className="box">
                                            <ul>
                                             <li>Trained in <span>Core Java</span>, <span>SQL</span>, <span>JSP/Servlet</span>, and <span>Spring Boot</span>.</li>
                                             <li>Developed a blog and video conferencing platform with real-time features and secure authentication.</li>
                                             <li>Built and integrated <span>REST APIs</span> with <span>MySQL</span> backend for data-driven modules.</li>
                                             <li>Collaborated using Git and CLI tools in an Agile-based learning environment.</li>
                                            </ul>
                                        </div>
                                        <div className="bottom">
                                            <ul className="text-list">
                                                <li>Spring Boot</li>
                                                <li>Java</li>
                                                <li>MySQL</li>
                                                
                                            </ul>
                                            <div className="icons">
                                                <a href="https://www.mountblue.io/">
                                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" style={{width: `20px`, height: `20px`}}><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            </div>
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