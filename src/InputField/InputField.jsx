import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import React Icons

const InputField = () => {
    const navigate = useNavigate(); // Hook to navigate between routes
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here if necessary
        console.log('Form submitted with data:', { title, name, email, image, description });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 sm:px-10 lg:px-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between items-center">
                <span>Provide your content</span>
                <span className="text-sm text-gray-600">{name}</span>
            </h2>

            <form onSubmit={handleSubmit}>
                {/* Title and Name Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your title"
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Email and Image Upload Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="upload" className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            id="upload"
                            onChange={handleFileChange}
                            className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Description Input */}
                <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter a description"
                        className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit, Next, and Back Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)} // Back button: go to the previous page
                        className="flex items-center gap-2 px-6 py-2 bg-gray-400 text-white font-semibold rounded-lg focus:outline-none hover:bg-gray-500"
                    >
                        <FaArrowLeft /> {/* Left arrow icon */}
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/payment')} // Next button: navigate to the payment route
                        className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg focus:outline-none hover:bg-blue-600"
                    >
                        Next
                        <FaArrowRight /> {/* Right arrow icon */}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InputField;
