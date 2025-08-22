import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects() {
    let [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        let getProjects = async () => {
            try {
                let projects = await axios.get("https://video-editor-portfolio-2.onrender.com/projects");
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
                    ? { ...project, isMuted: !project.isMuted }
                    : project
            )
        );
    }

    // helper function to return style based on mediaFormat
    const getVideoStyle = (format) => {
        if (format === "reel") {
            return { width: "auto", height: "auto" }; // vertical (9:16)
        } else if (format === "video") {
            // return { width: "533px", height: "300px" }; // horizontal (16:9)
        }
        return { width: "100%", height: "auto" }; // fallback
    };

    return (
        <section className="portfolio-preview fade-in" id="portfolio">
            <h2 className="section-title">Featured Work</h2>
            <div className="portfolio-grid">
                {allProjects.map((project, idx) => {
                    return (
                        <div
                            className="portfolio-item"
                            key={idx}
                            onClick={() => handleVideoPlay(project._id)}
                            style={project.mediaFormat == "reel" ? {aspectRatio: "9/16"} : {aspectRatio: "16/9"}}
                        >
                            {project.mediaType === "image/png" ? (
                                project.mediaUrl ? (
                                    <img
                                        src={project.mediaUrl}
                                        alt={project.title}
                                        width="100%"
                                    />
                                ) : (
                                    <p>⚠️ No Image Found</p>
                                )
                            ) : (
                                <video
                                    autoPlay
                                    muted={project.isMuted}
                                    loop
                                    style={getVideoStyle(project.mediaFormat)} // 👈 here
                                >
                                    <source src={project.mediaUrl} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            )}
                            <div className="portfolio-overlay">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
