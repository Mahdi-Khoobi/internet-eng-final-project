import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        commenterId: {
            //EmployeeId or AdmissionId
            type: String,
            require: true,
        },
        bookId: {
            type: String,
            require: true,
        },
        text: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Comment", CommentSchema);
