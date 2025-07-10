import "./Skills.css";
import swagger from "../../assets/Swagger.png";


const skills = {
  "Languages": [
    { name: "Java", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { name: "C#", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { name: "Python (Basic)", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "SQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  ],
  "Frameworks": [
    { name: "Spring Boot", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },
    { name: ".NET Framework", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" },
  ],
  "Database Management": [
    { name: "PostgreSQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
    { name: "SQL Server", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  ],
  "Tools": [
    { name: "Visual Studio", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" },
    { name: "IntelliJ", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg" },
    { name: "Eclipse", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/eclipse/eclipse-original.svg" },
    { name: "Spyder", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Spyder_logo.svg" },
    { name: "Git", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    { name: "IIS", src: "https://img.icons8.com/ios-filled/50/windows8.png" },
    { name: "Swagger", src: swagger },
  ],
  "Currently Exploring": [
    { name: "Machine Learning", src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Machine_learning_approaches.png" },
    { name: "Scikit-learn", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "Pandas", src: "https://pandas.pydata.org/static/img/pandas_white.svg" },
    { name: "NumPy", src: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
    { name: "Vision Transformers", src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/HuggingFace_Logo.svg" }
  ],
};

export default function SkillsLayout() {
  return (
    <div className="container">
      <section className="skills" id="skills">
        <div className="wrapper">
          <div className="title" data-aos="zoom-in" data-aos-duration="1000">
            <h3>Skills</h3>
          </div>

          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category} >
              <h4 className="skill-category"style={{ color: 'white' }}>{category}</h4>
              <div className="skill-grid">
                {items.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <img src={skill.src} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
