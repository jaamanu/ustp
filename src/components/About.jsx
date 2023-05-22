import React from 'react';

const AboutCard = () => {
  const processData = [
    {
      title: 'Application',
      description: 'The application process begins by filling out and submitting the USTP program application form online.',
    },
    {
      title: 'Approved',
      description: 'Once your application is reviewed and approved, you will receive a confirmation email or notification.',
    },
    {
      title: 'Placement',
      description: 'After approval, you will be placed in a suitable program based on your qualifications and preferences.',
    },
    {
      title: 'Arrival and Orientation',
      description: 'Upon arrival at the USTP, you will go through an orientation session to familiarize yourself with the program and facilities.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl text-red-500 mt-4 font-semibold mb-4">USA TEACHING PROGRAM APPLICATION PROCESS</h2>
      <div className="w-[85%] h-1/2">
        {processData.map((process, index) => (
          <div className="slide-card bg-gray-200 rounded-xl shadow-xg p-6 mt-2" key={index}>
            <h3 className="text-xl text-red-500 font-semibold mb-4">{process.title}</h3>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
