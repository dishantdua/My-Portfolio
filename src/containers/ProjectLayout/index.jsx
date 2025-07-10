import "./Project.css";

const allowedProjects = ["blog-project", "ZOOM_CLONE", "My-Portfolio", "Chat-Application"];

export default function ProjectLayout({ projects = [], profile = {} }) {
  return (
    <div className="projects">
      <section className="projects-section" id="projects">
        <div className="wrapper">
          <div className="title" data-aos="zoom-in" data-aos-duration="1000">
            <h3>Projects</h3>
          </div>

          <div className="projects-grid">
            {projects
              .filter((project) => allowedProjects.includes(project.name))
              .map((project) => (
                <div className="project-box" key={project.id}>
                  <h4 className="project-title">{project.name}</h4>
                  <p className="project-description">
                    {project.description || "No description provided."}
                  </p>
                  <div className="project-bottom">
                    <ul className="tech-list">
                      <li>⭐ {project.stargazers_count}</li>
                      <li>🍴 {project.forks_count}</li>
                      <li>💻 {project.language || "N/A"}</li>
                    </ul>
                    <div className="project-links">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* View All Projects Button */}
          {profile?.html_url && (
            <div className="button project">
              <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
