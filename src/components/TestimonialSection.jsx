import React from 'react';

const TestimonialCard = ({ imageSrc, fullName, message, city }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-xl shadow-lg p-4 mt-4  mr-2">
      <img src={imageSrc} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-lg font-semibold mb-2">{fullName}</h3>
      <p className="text-gray-700 mb-2">{message}</p>
      <p className="text-gray-500">{city}</p>
    </div>
  );
};

const TestimonialSection = () => {
  // Sample testimonial data
  const testimonials = [
    {
      imageSrc: '../../src/assets/t111.png',
      fullName: 'Prince Moise',
      message: 'I joined my recent school through USTP and have a smooth migration to the US. I am a Physics teacher with 3years of teaching experience from my home country but with the profesional development and support i have gained here through USTP and the agency here in USA my career has taken a leep and enjoying my stay in the USA.',
      city: 'New York',
    },
    {
      imageSrc: '../../src/assets/t2.png',
      fullName: 'Janet Kruser',
      message: 'The process was straight forward, applied through USTP, got approved , got interviewed, got school placement and contract letter and applied for my VISA which was issued.I am high school teacher , offering Biology as my specialization. ',
      city: 'Virginia',
    },
    {
      imageSrc: '../../src/assets/t3.png',
      fullName: 'Bernard Kane',
      message: 'I am a Mathematic Teacher specailising in Geomtry and Trigonometry and currently Joined the school from South Africa, visa process with very smooth after getting my contract letter from the school in North Carolina, i also got a free travel ticket and have been able to migrate my family with me as well thanks to USTP.',
      city: 'North Carolina',
    },
    {
      imageSrc: '../../src/assets/t4.png',
      fullName: 'Sarah Davis',
      message: 'The applications process was direct, all i had to do was to submit the required documents to USTP and with their professional support they prepare my documents and trained me for both the school interview process and tips on the VISA interview which helped me secured my Visa to travel and later my husband with two kids joined me.',
      city: 'South Carolina',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          imageSrc={testimonial.imageSrc}
          fullName={testimonial.fullName}
          message={testimonial.message}
          city={testimonial.city}
        />
      ))}
    </div>
  );
};

export default TestimonialSection;
