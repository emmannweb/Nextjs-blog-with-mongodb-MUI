import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // isAdmin: { type: Boolean, required: true, default: false },
}, { timestamps: true });

export default mongoose.models?.User || mongoose.model('User', userSchema);