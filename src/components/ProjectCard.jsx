export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img
        src={project.image}
        alt={project.name}
        className="project-logo"
      />

      <h2>{project.name}</h2>

      {project.beginnerFriendly && (
        <span className="badge">Beginner Friendly</span>
      )}

      <p><strong>Problem:</strong> {project.problem}</p>
      <p><strong>Use cases:</strong> {project.useCases}</p>
      <p><strong>Risks:</strong> {project.risks}</p>
      <p><strong>Simple:</strong> {project.simple}</p>

      <p>
        <strong>Risk Level:</strong>
        <span className={`risk ${project.riskLevel.toLowerCase()}`}>
          {project.riskLevel}
        </span>
      </p>
    </div>
  );
}
