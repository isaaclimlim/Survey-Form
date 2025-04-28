import React from 'react';
import { useState } from 'react';

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(15);
    const [role, setRole] = useState("Student");
    const [recommend, setRecommend] = useState("Definitely");
    const [feature, setFeature] = useState("Projects");
    const [improved, setImproved] = useState([]);
    const [comment, setComment] = useState("");
    const [submitStatus, setSubmitStatus] = useState({ message: "", type: "" }); // For showing submission status

    const handleImproved = (e) => {
        if (e.target.checked) {
            setImproved(prev => [...prev, e.target.value]);
        } else {
            setImproved(prev => prev.filter(item => item !== e.target.value));
        }
    }

    const handleList = improved.map((item) => (
        <li key={item} className="text-gray-300">{item}</li>
    ));

    const saveToDatabase = async (formData) => {
        try {
            const response = await fetch('http://localhost:3000/surveys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                return { success: true, message: "Form data saved successfully!" };
            } else {
                return { success: false, message: "Failed to save form data." };
            }
        } catch (error) {
            console.log("Error saving form data:", error);
            return { success: false, message: "An error occurred while saving the form data." };
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Form Data Object
        const formData = {
            id: Date.now(), //Generates a unique ID based on the timestamp
            name,
            email,
            age,
            role,
            recommend,
            feature,
            improved,
            comment,
            submittedAt: new Date().toISOString()
        }


        console.log("Form submitted!", formData);

        const result = await saveToDatabase(formData);

        if (result.success) {
            setSubmitStatus({ message: result.message, type: "success" });

            // Reset form after successful submission
            resetForm();
        } else {
            setSubmitStatus({ message: result.message, type: "error" });
        }
        
    };

    // Reset form function
    const resetForm = () => {
        setName("");
        setEmail("");
        setAge(15);
        setRole("Student");
        setRecommend("Definitely");
        setFeature("Projects");
        setImproved([]);
        setComment("");
    }

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-200">
            <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-400 mb-4">CodingAcademy Survey Form</h1>
                    <p className="text-xl text-gray-300">Thank you for taking the time to help us improve the platform</p>
                </div>

                {/* Status message */}
                {submitStatus.message && (
                    <div className={`p-4 mb-6 rounded-md ${submitStatus.type === "success" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="fname" className="block text-lg font-medium text-gray-200">Name</label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                id="fname"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-200">Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="age" className="block text-lg font-medium text-gray-200">Age (Optional)</label>
                            <input
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                                type="number"
                                id="age"
                                min="15"
                                max="120"
                                placeholder="Enter your age"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-200">Which option best describes your current role?</label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                name="role"
                                id="dropdown"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Student">Student</option>
                                <option value="Full Time Job">Full Time Job</option>
                                <option value="Full Time Learner">Full Time Learner</option>
                                <option value="Prefer Not to say">Prefer Not to say</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <p className="block text-lg font-medium text-gray-200 mb-2">Would you recommend CodingAcademy to a friend?</p>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input
                                        value="Definitely"
                                        type="radio"
                                        name="recommend"
                                        onChange={(e) => setRecommend(e.target.value)}
                                        id="definitely"
                                        checked={recommend === "Definitely"}
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700"
                                    />
                                    <label htmlFor="definitely" className="ml-2 block text-gray-300">Definitely</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        value="Maybe"
                                        type="radio"
                                        onChange={(e) => setRecommend(e.target.value)}
                                        name="recommend"
                                        id="maybe"
                                        checked={recommend === "Maybe"}
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700"
                                    />
                                    <label htmlFor="maybe" className="ml-2 block text-gray-300">Maybe</label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        value="Not sure"
                                        type="radio"
                                        onChange={(e) => setRecommend(e.target.value)}
                                        name="recommend"
                                        id="not-sure"
                                        checked={recommend === "Not sure"}
                                        className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700"
                                    />
                                    <label htmlFor="not-sure" className="ml-2 block text-gray-300">Not sure</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-200">What is your favourite feature of FreeCodeCamp?</label>
                            <select
                                value={feature}
                                onChange={(e) => setFeature(e.target.value)}
                                name="favorite"
                                id="feature"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Challenges">Challenges</option>
                                <option value="Projects">Projects</option>
                                <option value="Community">Community</option>
                                <option value="Open Source">Open Source</option>
                            </select>
                        </div>

                        <div>
                            <p className="block text-lg font-medium text-gray-200 mb-2">What would you like to see improved? (Check all that apply)</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {[
                                    "Front-end Projects",
                                    "Back-end Projects",
                                    "Data Visualization",
                                    "Challenges",
                                    "Open Source Community",
                                    "Gitter Help Rooms",
                                    "Videos",
                                    "City Meetups",
                                    "Forums",
                                    "Additional Courses"
                                ].map((item) => (
                                    <div key={item} className="flex items-center">
                                        <input
                                            onChange={handleImproved}
                                            value={item}
                                            type="checkbox"
                                            checked={improved.includes(item)}
                                            id={item.replace(/\s+/g, '-').toLowerCase()}
                                            className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-600 bg-gray-700 rounded"
                                        />
                                        <label htmlFor={item.replace(/\s+/g, '-').toLowerCase()} className="ml-2 block text-sm text-gray-300">{item}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="comment" className="block text-lg font-medium text-gray-200">Any comments or suggestions?</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                id="comment"
                                rows="4"
                                placeholder="Enter your comment here"
                                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:ring-offset-gray-800 transition duration-150"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                {/* Preview Section */}
                {(name || email || improved.length > 0 || comment) && (
                    <div className="mt-8 p-4 border border-gray-600 rounded-md bg-gray-700">
                        <h2 className="text-xl font-semibold text-blue-300 mb-4">Form Preview</h2>
                        <div className="space-y-2">
                            {name && <p className="text-gray-300"><span className="font-medium text-gray-200">Name:</span> {name}</p>}
                            {email && <p className="text-gray-300"><span className="font-medium text-gray-200">Email:</span> {email}</p>}
                            {age && <p className="text-gray-300"><span className="font-medium text-gray-200">Age:</span> {age}</p>}
                            <p className="text-gray-300"><span className="font-medium text-gray-200">Role:</span> {role}</p>
                            <p className="text-gray-300"><span className="font-medium text-gray-200">Recommend to someone:</span> {recommend}</p>
                            <p className="text-gray-300"><span className="font-medium text-gray-200">Favourite feature:</span> {feature}</p>
                            {improved.length > 0 && (
                                <div>
                                    <p className="font-medium text-gray-200">Improved features:</p>
                                    <ul className="list-disc pl-5">{handleList}</ul>
                                </div>
                            )}
                            {comment && <p className="text-gray-300"><span className="font-medium text-gray-200">Comment:</span> {comment}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterForm;