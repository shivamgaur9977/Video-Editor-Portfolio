import { useState } from "react";

export default function RequestForm() {

    let [formData, setFormdata] = useState({ name: "", email: "", projectType: "", about: "" });

    let handleInput = (event) => {
        setFormdata((preValues) => {
            return { ...preValues, [event.target.name]: event.target.value };
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post("http://localhost:8080/send-email", form);
    //         alert("✅ Email sent successfully!");
    //     } catch (err) {
    //         alert("❌ Failed to send email!");
    //         console.error(err);
    //     }
    // };


    return (
        <section className="contact fade-in" id="contact">
            <h2 className="section-title">Let's Create Together</h2>
            <p>Ready to bring your vision to life? Let's discuss your project and create something amazing together.</p>

            <form className="contact-form">
                <div className="form-group">
                    <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleInput} required />
                    <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleInput} required />
                </div>
                <input type="text" placeholder="Project Type" name="projectType" value={formData.projectType} onChange={handleInput} required />
                <textarea placeholder="Tell me about your project..." name='about' value={formData.about} onChange={handleInput} required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    )
}