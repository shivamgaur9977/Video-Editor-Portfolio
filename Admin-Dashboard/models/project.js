import mongoose from 'mongoose';
const {Schema} = mongoose;

main()
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
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