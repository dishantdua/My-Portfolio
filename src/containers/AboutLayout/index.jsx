import React from 'react';
import image from '../../assets/Me.png';

export default function AboutLayout(){
    return(
        < div className='container'>
          <section className="about " id="about">
            <div className="wrapper">
              <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                <h3>About Me</h3>
              </div>
              <div className="info">
                <div className="box" data-aos="fade-right" data-aos-duration="1000">
                  <div className="text">
                    <p>Hello! My name is Dishant Dua and I enjoy building robust backend systems and automation tools. My journey into software development began during my engineering studies, where I developed a strong interest in system design and data-driven solutions.</p>

                    <p>During my academic years, I worked on various backend projects using <a href="">C#</a>, <a href="">.NET</a>, and <a href="">SQL Server</a>. That experience shaped my passion for creating efficient, production-grade applications.</p>

                    <p>In 2023, I joined <a href="">Move37 Capital</a> as a Software Engineer, where I contributed to fintech systems that automated trade data workflows and reduced manual processing by over 25%.</p>

                    <p>I’ve also explored <a href="">AI/ML</a> through Python projects involving computer vision and data automation. I aim to keep learning and integrating intelligent features into backend systems.</p>
                    </div>
                </div>
                <div className="box" >
                  <div className="img">
                    <div className="imgborder">
                  </div>
                  <div className="imgbox" data-aos="flip-right"  data-aos-duration="1000">
                      <img src={image} alt="Dishant Dua" />
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

        </div>
    );
}