import  Ityped  from "../../hooks/ityped";
import resumePDF from "../../assets/Resume.pdf";

export default function HomeLayout(){
    
    return(
        <>
           
             <div className="container" id="home">
                    <section className="banner">
                        <div className="wrapper">
                            <div className="top">
                                <div className="title">
                                    <p>Hi, my name is</p>
                                    <h2 className="text">
                                        Dishant Dua
                                    </h2>
                                </div>
                                <div className="middleTitle"  data-aos="fade-up">
                                        <Ityped />
                                </div>
                            </div>
                            <div className="bottom" data-aos="zoom-out-right" data-aos-duration="1000">
                                <div className="paragraph" >
                                <p>I’m a Software Engineer with experience in <span>.NET</span>, <span>C#</span>, and <span>Spring Boot</span>, currently working at Move37 Capital. I specialize in backend development and automation, having built fintech tools that reduced manual processing. I'm also actively exploring <span>AI/ML</span> through projects in <span>computer vision</span> and <span>data automation</span>, integrating intelligent workflows into production systems.
                                </p>
                                </div>
                                <div className="button resume"  >
                                <a href={resumePDF} > Check out my resume! </a>
                                </div>
                            
                            </div>
                            
                        </div>
                    </section>
            </div>
        </>
    );
}