import React from 'react';

const Services = () => {
  const services = [
    {
      id: 'cirugia-holep',
      title: 'Prostatic Growth',
      description: 'Benign Prostatic Hyperlapsia',
      image: '/trash/service.jpg',
    },
    {
      id: 'cancer-prostata',
      title: 'Prostate Cancer',
      description: 'Diagnosis and treatment of prostate cancer.',
      image: '/trash/service2.jpg',
    },
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className='mt-20 md:w-1/2 mx-auto text-center '>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Services</h2>
        <p className='text-neutralDGrey'>Specialist in benign and malignant disease of the prostate gland</p>
      </div>

      <div>
        {/* Sección de servicios centrados */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-16'>
        <div className='flex items-center justify-center lg:w-2/3 mx-auto'>
          <div className='text-center'>
            <h2 className='lg:text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
              See verified reviews from our patients
            </h2>
            <div className='flex items-center justify-center gap-8'>
              <a href="https://www.google.com/maps/place/Dr.+Bruno+Rubí,+Cirujano+Urólogo/@19.0212342,-98.2347385,3271m/data=!3m1!1e3!4m8!3m7!1s0x8428aff80c0575ef:0xf3628b313ac0c63a!8m2!3d19.0212342!4d-98.2347385!9m1!1b1!16s%2Fg%2F11q8pwtrvz?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D">
                <button className='btn-primary text-white'>
                  Go to opinions
                  <svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none' className='inline-block ml-2'>
                    <path d='M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004' stroke='white' />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
