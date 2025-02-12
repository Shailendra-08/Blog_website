const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");
const cookieParser = require("cookie-parser");

// Importing Routes
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const commentRouter = require("./routes/comments");

// Initialize Express App
const app = express();
dotenv.config(); // Load environment variables

// Connect to Database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ DB connected successfully");
    } catch (err) {
        console.error("❌ Database connection error:", err);
        process.exit(1);
    }
};

// CORS Middleware (Fixed)
const allowedOrigins = [
    "http://localhost:5173",
    "https://blog-git-main-shailendra08s-projects.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Handle Preflight Requests (OPTIONS)
app.options("*", cors());

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/images", express.static(path.join(__dirname, "/images")));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

// Image Upload using Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.img); // Dynamic filename from request
    },
});

const upload = multer({ storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("✅ Image uploaded successfully!");
});

// Start Server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
});
