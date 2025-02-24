# AI Code Reviewer

## Overview

This project is an AI-powered code review tool built with **Node.js**, **Express**, **React**, and the **Gemini API**. It allows developers to submit their code snippets and receive automated code reviews, suggestions, and improvements using the power of AI.

---

## Features

- **Code Submission**: Submit code snippets for review.
- **AI-Powered Reviews**: Leverage the Gemini API to analyze code and provide feedback.
- **Suggestions & Improvements**: Get actionable suggestions for code optimization, best practices, and bug fixes.
- **User-Friendly Interface**: Built with React for a seamless and intuitive user experience.
- **Backend API**: Powered by Node.js and Express for handling code submissions and AI integration.

---

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **AI Integration**: Gemini API
- **Other Tools**: Axios (for API calls), CSS (for styling)

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- Gemini API key (sign up at [Gemini API](https://gemini.com) to get your API key).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sonukashyap2400/AI-Code-Reviewer.git
   cd AI-Code-Reviewer
   ```

2. **Install Dependencies**:
   - For the backend:
     ```bash
     cd Backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../Frontend
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the `Backend` folder:
     ```env
     GEMINI_API_KEY=your_gemini_api_key
     PORT=3000
     ```
   - Replace `your_gemini_api_key` with your actual Gemini API key.

4. **Run the Backend Server**:
   ```bash
   cd Backend
   npm start
   ```
   The backend will start on `http://localhost:3000`.

5. **Run the Frontend**:
   ```bash
   cd ../Frontend
   npm start
   ```
   The frontend will start on `http://localhost:5173`.

6. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173` to use the AI Code Reviewer.
   - The backend API will be running on `http://localhost:3000`.

---

## Usage

1. **Submit Code**:
   - Paste your code snippet into the input box on the frontend.
   - Click the "Submit" button to send the code for review.

2. **View Review**:
   - The AI will analyze the code and display feedback, including:
     - Code quality suggestions.
     - Potential bugs or issues.
     - Optimization tips.

---

## Folder Structure

```
AI-Code-Reviewer/
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── README.md
└── README.md
```

---

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Gemini API](https://gemini.com) for providing the AI capabilities.
- [React](https://reactjs.org) and [Node.js](https://nodejs.org) for the tech stack.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Sonu Kashyap**: [sonukashyap3916@gmail.com](mailto:sonukashyap3916@gmail.com)
- **GitHub**: [Sonukashyap2400](https://github.com/Sonukashyap2400)

---

Enjoy using the AI Code Reviewer! 🚀
