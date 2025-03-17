import { useState, useEffect } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "./App.css";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`function sum() { return 1 + 1; }`);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ Loading state added

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true); // ✅ Show loading message
    setReview("⏳ Generating review, please wait...");
    try {
      const response = await axios.post("https://ai-code-reviewer-backend-wpez.onrender.com", { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("⚠️ Failed to fetch review.");
    }
    setIsLoading(false);
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(newCode) => setCode(newCode)}
            highlight={(code) => Prism.highlight(code, Prism.languages.js, "javascript")}
            padding={10}
            style={{
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              backgroundColor: "#282c34",
              color: "#fff",
            }}
          />
        </div>

        <div onClick={reviewCode} className="review">Review</div>
      </div>

      <div className="right">
        {isLoading ? (
          <div className="loading">⏳ Generating review, please wait...</div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
      </div>
    </main>
  );
}

export default App;
