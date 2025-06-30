import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">About This Project</h1>
      <p className="text-gray-700 text-lg mb-4">
        This Product Listing application is built using <strong>React</strong> to demonstrate a basic e-commerce product grid
        with core functionalities such as:
      </p>
      <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
        <li>Viewing a list of mock products</li>
        <li>Searching products by name</li>
        <li>Filtering products by category</li>
        <li>Sorting by price and rating</li>
        <li>Adding products to cart (with console log simulation)</li>
      </ul>
      <p className="text-gray-700 text-lg mb-4">
        The UI is styled using <strong>Tailwind CSS</strong> to maintain a clean and responsive layout. All components are built
        to be modular and reusable.
      </p>
      <p className="text-gray-700 text-lg">
        This project was developed by <strong>Lavanya Chandran</strong> as part of a React learning assignment focused on building practical user interfaces and improving frontend skills with real-world use cases.
      </p>
    </div>
  );
};

export default About;
