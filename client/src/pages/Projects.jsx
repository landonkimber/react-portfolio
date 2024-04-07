import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'This is the first project',
            imageUrl: 'https://example.com/project1.jpg',
        },
        {
            title: 'Project 2',
            description: 'This is the second project',
            imageUrl: 'https://example.com/project2.jpg',
        },
        // Add more projects as needed
    ];

    return (
        <div>
            <h1>My Projects</h1>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;