import express from "express";
import Book from "../models/Book.js";
import Comment from "../models/Comment.js";

const router = express.Router();

/* Getting all comments by bookId */
router.get("/getcomments/:id", async (req, res) => {
    try {
        const bookWithComments = await Book.findById(req.params.id).populate(
            "comments"
        );
        if (!bookWithComments) {
            return res.status(404).json({ message: "Book not found" });
        }
        const comments = bookWithComments.comments;
        res.status(200).json({ comments });
    } catch (err) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

/* Adding comment */
router.post("/addcomment", async (req, res) => {
    try {
        const newComment = await new Comment({
            bookId: req.body.bookId,
            commenterId: req.body.commenterId,
            text: req.body.text,
        });
        const comment = await newComment.save();
        const book = Book.findById(req.body.bookId);
        await book.updateOne({ $push: { comments: comment._id } });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(504).json(err);
    }
});

export default router;
