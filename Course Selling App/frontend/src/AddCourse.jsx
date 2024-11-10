import { fontLora, fontMontserrat } from "./Style"
import React, { useState } from 'react';
export function AddCourse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [keyFeatures, setKeyFeatures] = useState(['']);

    // Handle key features input dynamically
    const handleKeyFeaturesChange = (index, value) => {
        const updatedFeatures = [...keyFeatures];
        updatedFeatures[index] = value;
        setKeyFeatures(updatedFeatures);
    };

    const addFeatureField = () => {
        setKeyFeatures([...keyFeatures, '']);
    };

    // Submit form data to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            description,
            price: Number(price),
            imageUrl,
            keyFeatures,
        };

        try {
            const response = await fetch('http://localhost:3000/api/v1/admin/course', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Assuming you need to authenticate the admin, include a token here:
                    // 'Authorization': `Bearer YOUR_AUTH_TOKEN`
                },
                body: JSON.stringify(formData),
                credentials: "include"
            });

            const data = await response.json();

            if (response.ok) {
                alert('Course created successfully!');
                console.log(data);
            } else {
                alert(`Error: ${data.message || 'Failed to create course'}`);
                console.error("Error:", data);
            }
        } catch (error) {
            console.error("Error creating course:", error);
        }
    };

    return (<form style={fontLora} onSubmit={handleSubmit} className="max-w-xl mx-auto p-10 bg-white shadow-md rounded-md">
        <h2 style={fontMontserrat} className="text-2xl font-bold mb-6 text-gray-800">Create a New Course</h2>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Price</label>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
            <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Key Features</label>
            {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input
                        type="text"
                        value={feature}
                        onChange={(e) => handleKeyFeaturesChange(index, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            ))}
            <button
                style={fontMontserrat}
                type="button"
                onClick={addFeatureField}
                className="mt-2 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Add Feature
            </button>
        </div>

        <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
            Create Course
        </button>
    </form>
    );
}