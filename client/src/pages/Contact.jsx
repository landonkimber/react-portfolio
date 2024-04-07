import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="max-w-md mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Contact Page</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1">Name:</label>
                    <input type="text" id="name" name="name" className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input type="email" id="email" name="email" className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1">Message:</label>
                    <textarea id="message" name="message" rows="4" className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
