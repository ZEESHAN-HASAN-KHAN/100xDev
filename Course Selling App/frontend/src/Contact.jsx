import React, { useState } from 'react';
import { fontLora, fontMontserrat } from './Style';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const notify = () => toast("Message is Sent");
    const notify1 = () => toast("Unable to Sent");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Data:', formData);

        e.persist();
        e.preventDefault();

        emailjs
            .sendForm(
                'service_jsk39i5',
                'template_jp000wt',
                e.target,
                't0hKekkSkVM8UPWan'
            )
            .then(
                (result) => {
                    notify()
                },
                (error) => {

                    console.error('EmailJS Error:', error);
                    notify1()
                }
            );

        // Clears the form after sending the email
        e.target.reset();


        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className=" flex flex-col items-center justify-center min-h-screen bg-black">
            <h2 style={fontMontserrat} className="text-5xl font-bold text-white text-center mb-4">Contact Us</h2>

            <div className="w-full max-w-lg  bg-white shadow-md rounded-lg p-8">
                <p style={fontMontserrat} className="text-gray-600 text-center mb-8">Have a question? We're here to help!</p>

                <form style={fontLora} onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your Full Name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Send Message
                        </button>
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}


