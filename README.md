# CodingAcademy Survey Form

A stylish responsive survey form built with React and Tailwind CSS, featuring a dark theme design and data storage functionality.


## 🚀 Features

- **Modern Dark Theme UI** - Sleek dark-themed interface with carefully chosen color palette
- **Fully Responsive** - Adapts seamlessly to all screen sizes
- **React + Tailwind CSS** - Built with React for dynamic functionality and styled with Tailwind CSS
- **Form Validation** - Client-side validation for all form inputs
- **Data Storage** - Stores form submissions in a local JSON database
- **Live Preview** - See form data in real-time as you fill it out

## 📋 Description

This project is a CodingAcademy Survey Form challenge, enhanced with modern technologies and additional features. The form collects user feedback about the CodingAcademy platform, including:

- Basic user information (name, email, age)
- Current role
- Recommendation likelihood
- Favorite features
- Areas for improvement
- Additional comments

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js** - JavaScript runtime environment
- **File System API** - For storing form submissions

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/isaaclimlim/Survey-Form.git
   cd Survey-Form
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create the data directory**
   ```bash
   mkdir -p data
   echo "[]" > data/db.json
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## 📁 Project Structure

```
├── components/
│   └── RegisterForm.js      # Main survey form component
├── data/
│   └── db.json              # JSON database for form submissions
├── pages/
│   ├── api/
│   │   └── submit-form.js   # API endpoint for form submission
│   └── index.js             # Home page
├── public/
├── styles/
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
```

## 💻 Usage

1. Fill out the form with your feedback
2. Review your responses in the live preview section
3. Submit the form
4. Your submission will be stored in the `data/db.json` file

## 🤝 Contributing

Contributions are welcome! Feel free to open a pull request or submit an issue.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- FreeCodeCamp for the original project idea
- The React and Tailwind CSS communities for the excellent documentation
- All contributors who help improve this project

## 📬 Contact

If you have any questions or feedback, please open an issue on GitHub or reach out to me at your-email@example.com.

---

Happy coding! 💻✨