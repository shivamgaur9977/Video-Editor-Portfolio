import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects() {

    let [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        let getProjects = async () => {
            try {
                let projects = await axios.get("http://localhost:8080/projects");
                projects.data.map((project) => project.isMuted = true);
                setAllProjects(projects.data);
            } catch (err) {
                console.log("Some error Occured in getting data", err);
            }
        }

        getProjects();
    }, []);

    let handleVideoPlay = (id) => {

        setAllProjects((prevProjects) =>
            prevProjects.map((project) =>
                project._id === id
                    ? { ...project, isMuted: !project.isMuted } // update only clicked
                    : project
            )
        );
    }


    return (
        <section className="portfolio-preview fade-in" id="portfolio">
            <h2 className="section-title">Featured Work</h2>
            <div className="portfolio-grid">

                {allProjects.map((project, idx) => {
                    return (
                        <div className="portfolio-item" key={idx} onClick={() => handleVideoPlay(project._id)}>
                            {project.mediaType == "image/png" ?
                                project.mediaUrl ? (
                                    <img src={`${project.mediaUrl}`} alt={project.title} width="100%" />
                                ) : (
                                    <p>⚠️ No Image Found</p>
                                )
                                : <video width="100%" autoPlay muted={project.isMuted} loop poster="thumbnail.jpg">
                                    <source src={project.mediaUrl} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            }
                            <div className="portfolio-overlay">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}