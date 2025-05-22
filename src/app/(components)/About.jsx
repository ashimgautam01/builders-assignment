import React from "react";

const developer = {
  name: "Your Name",
  role: "Intern",
  image: "/developer.png",
  description: `This project is part of my internship at Builders Academy. It demonstrates a modern Solana wallet dashboard built with Next.js, React, and Tailwind CSS. 
The app allows users to connect their Solana wallet, view their balance, and interact with the Solana devnet securely and intuitively. 
It features wallet connection, real-time balance fetching, attractive UI, and toast notifications for user feedback. 
The goal is to provide a seamless onboarding experience for new users exploring Solana and web3 technologies.`
};

const About = () => {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
      <img
        src={developer.image}
        alt={developer.name}
        className="w-32 h-32 rounded-full border-4 border-purple-200 shadow mb-4 object-cover"
      />
      <h2 className="text-2xl font-bold text-purple-700 mb-1">{developer.name}</h2>
      <h3 className="text-md text-purple-500 mb-4">{developer.role}</h3>
      <p className="text-gray-700 text-center whitespace-pre-line">{developer.description}</p>
    </div>
  );
};

export default About;