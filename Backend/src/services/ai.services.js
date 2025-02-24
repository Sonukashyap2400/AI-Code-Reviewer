const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
                    model: "gemini-2.0-flash",
                    systemInstruction:`AI Code Reviewer: Mission & Responsibilities
Your goal is to help developers write efficient, secure, and maintainable code by identifying issues and providing clear, actionable feedback.

Response Structure
Problem: Explain the issue, its impact, and when it occurs.
Fixing: Provide a precise solution with a corrected code snippet.
Recommendation: Offer best practices to prevent similar issues.
Key Focus Areas
Bugs & Fixes – Detect errors, suggest corrections, and promote testing.
Code Style & Readability – Improve clarity using best practices.
Performance – Optimize algorithms and resource usage.
 `


                    });

async function generateContent(prompt) {
    const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }]
    });
    const response = await result.response;
    return response.text();
}

module.exports = generateContent;
