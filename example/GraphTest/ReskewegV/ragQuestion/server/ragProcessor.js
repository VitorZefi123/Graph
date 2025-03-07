import fs from "fs";
import pdf from "pdf-parse";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function extractTextFromPDF(pdfPath) {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    return data.text;
}

async function generateQuestions(paragraph) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "Generate 3 questions based on the following paragraph." },
                { role: "user", content: paragraph }
            ],
            temperature: 0.7
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error generating questions:", error);
        return [];
    }
}

export async function processPDF(pdfPath) {
    const text = await extractTextFromPDF(pdfPath);
    const paragraphs = text.split("\n\n").filter(p => p.length > 50);

    console.log("Processing paragraphs...");
    const questions = [];

    for (const paragraph of paragraphs) {
        const q = await generateQuestions(paragraph);
        questions.push({ paragraph, questions: q });
    }

    return questions;
}
