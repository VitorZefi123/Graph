import express from "express";
import multer from "multer";
import fs from "fs";

const app = express();
const PORT = 5000;

// Ensure the uploads directory exists
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads"); // Upload folder
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// API Route for PDF Upload
app.post("/upload", upload.single("pdf"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    res.status(200).json({ message: "File uploaded successfully", filePath });
});



app.get("/upload-page", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Upload PDF</title>
            </head>
            <body style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
                <h1>Upload Your PDF</h1>
                <form id="uploadForm" enctype="multipart/form-data">
                    <input type="file" id="fileInput" name="pdf" accept=".pdf" required>
                    <br><br>
                    <button type="button" onclick="uploadFile()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
                        Upload
                    </button>
                </form>
                <p id="responseMessage"></p>
                <br>
                <button onclick="window.location.href='/'" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">
                    Back to Home
                </button>

                <script>
                    function uploadFile() {
                        const fileInput = document.getElementById("fileInput");
                        if (!fileInput.files.length) {
                            alert("Please select a PDF file.");
                            return;
                        }

                        const formData = new FormData();
                        formData.append("pdf", fileInput.files[0]);

                        fetch("/upload", {
                            method: "POST",
                            body: formData
                        })
                        .then(response => response.text())
                        .then(data => {
                            document.getElementById("responseMessage").innerText = data;
                        })
                        .catch(error => {
                            console.error("Error uploading file:", error);
                            document.getElementById("responseMessage").innerText = "Upload failed.";
                        });
                    }
                </script>
            </body>
        </html>
    `);
});




// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
