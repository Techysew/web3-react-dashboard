export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>

        <img
          src={project.image}
          alt={project.name}
          className="modal-image"
        />

        <h2>{project.name}</h2>
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
    </div>
  );
}
