import { useState } from "react";
import axios from "axios";

export default function NewProjectForm() {
    const [formData, setFormData] = useState({ title: "", description: "" });
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let submittedData = new FormData();
        submittedData.append("title", formData.title);
        submittedData.append("description", formData.description);
        submittedData.append("media", file);

        for (let pair of submittedData.entries()) {
            console.log(pair[0], pair[1]);
        }

        try {
            let res = await axios.post("https://video-editor-portfolio-2.onrender.com/projects", submittedData);
            console.log("✅ Posted result:", res.data);
        } catch (err) {
            if (err.response) {
                console.error("❌ Backend Error:", err.response.data);
            } else {
                console.error("❌ Network/Other Error:", err.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Project Title"
            />
            <br />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Project Description"
            />
            <br />
            <input type="file" name="media" onChange={(e) => setFile(e.target.files[0])} />
            <br />
            <button type="submit">Add Project</button>
        </form>
    );
}
