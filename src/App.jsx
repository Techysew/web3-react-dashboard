import { useState } from "react";
import projectsData from "./data/projects.json";
import ProjectCard from "./components/ProjectCard";
import Modal from "./components/Modal";

export default function App() {
  const [projects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Layer 1", "DeFi", "NFT"];

  const filteredProjects = projects
    .filter(p =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="app">
      <header>
        <h1>Web3 Project Research Dashboard</h1>
        <p>Simple explanations of Web3 projects</p>
      </header>

      {/* Search */}
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Categories */}
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="projects">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
