import mongoose from 'mongoose';
const {Schema} = mongoose;
import dotenv from "dotenv";
dotenv.config();

main()
.then(() => console.log("DB is connected"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
};

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String
    }, 
    mediaType: {
        type: String
    }
})

const Project = mongoose.model("Project", projectSchema);

export default Project;