import { useEffect, useState } from "react";
import ProjectLayout from "../containers/ProjectLayout";
import { userData } from "../helper/user-data";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchGitHubData() {
      const userRes = await fetch(`https://api.github.com/users/${userData.githubUser}`);
      const userDataRes = await userRes.json();
      setProfile(userDataRes);

      const repoRes = await fetch(
        `https://api.github.com/search/repositories?q=user:${userData.githubUser}+fork:false&sort=stars&per_page=100`
      );
      const repoData = await repoRes.json();
      setProjects(repoData.items);
    }

    fetchGitHubData();
  }, []);

  return <ProjectLayout projects={projects} profile={profile} />;
}
