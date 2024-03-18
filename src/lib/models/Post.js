import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Post must have a title'],
        min: 4
    },
    description: {
        type: String,
        required: [true, 'Post must have a description'],
        min: 8
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        required: [true, 'Post must have an image url'],
    }
}, { timestamps: true });

export default mongoose.models?.Post || mongoose.model('Post', postSchema);