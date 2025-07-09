// src/pages/Projects.jsx
import { useEffect, useState } from "react";
import ProjectsLayout from "../containers/ProjectLayout/";
import { userData } from "../helper/user-data"; // contains { githubUser: "your-username" }

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchGitHubData() {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=6`
      );
      const data = await res.json();
      setProjects(data.items || []);
    }

    fetchGitHubData();
  }, []);

  return <ProjectsLayout projects={projects} />;
}
