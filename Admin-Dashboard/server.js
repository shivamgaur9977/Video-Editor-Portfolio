import express from "express";
import multer from "multer";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import Project from './models/project.js';
dotenv.config();

const app = express();
app.use(cors());

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

// Storage on Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "portfolio_projects",  // Cloudinary folder name
      resource_type: "auto",         // auto => images + videos dono allow
    };
  },
});


const upload = multer({ storage });

//Index Route:-
app.get("/projects", async (req, res) => {
  let allProjects = await Project.find({});
  res.send(allProjects);
  return allProjects;
})

// Route
app.post("/projects", upload.single("media"), async (req, res) => {
  try {
    console.log("req.body:", req.body);
    console.log("req.file:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "❌ File not uploaded" });
    }

    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      mediaUrl: req.file.path,
      mediaType: req.file.mimetype
    });

    await project.save();

    res.json(project);

  } catch (err) {
    console.error("Upload error (stack):", err);                 // pura error object
    console.error("Upload error (msg):", err.message);           // sirf message
    res.status(500).json({ error: err.message || "Server Error" });
  }
});


//Route to receive emails on our own email Id:-
// app.post("/send-email", async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     // Transporter setup (Gmail example)
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,  // your email
//         pass: process.env.EMAIL_PASS   // your app password
//       },
//     });

//     // Email details
//     await transporter.sendMail({
//       from: `"Portfolio Form" <${process.env.EMAIL_USER}>`,
//       to: "yourmail@gmail.com", // jis email pe details chahiye
//       subject: "📩 New Form Submission",
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       html: `<h2>New Submission</h2>
//              <p><b>Name:</b> ${name}</p>
//              <p><b>Email:</b> ${email}</p>
//              <p><b>Message:</b> ${message}</p>`
//     });

//     res.json({ success: true, message: "Email sent successfully!" });

//   } catch (err) {
//     console.error("Email Error:", err);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });



app.listen(8080, () => console.log("🚀 Server running at http://localhost:8080"));
