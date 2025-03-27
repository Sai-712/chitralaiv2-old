import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Create Event & Invite guests',
      description: 'Create an event, upload photos and invite all guests',
      image: '/create event.jpeg'
    },
    {
      title: 'Click a Selfie to find photos',
      description: 'Guest opens the link & clicks a selfie to find their photos',
      image: '/Click a Selfie to find photos1.jpeg'
    },
    {
      title: 'Get your photos',
      description: 'Guests can view, download & share photos',
      image: '/Get your photos .jpeg'
    }
  ];

  return (
    <div className="bg-blue-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            How it works. Easy & Fast
          </h2>
          <p className="mt-2 text-base sm:text-lg leading-7 text-gray-600">
            World's fastest & easiest solution for Photo Sharing and Sales
          </p>
        </div>

        <div className="mx-auto mt-6 sm:mt-8 grid max-w-lg grid-cols-1 gap-x-6 gap-y-8 sm:max-w-none sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="mb-4 rounded-xl flex items-center justify-center bg-blue-100 p-2 sm:p-3 shadow-lg ring-1 ring-gray-900/10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -left-3 -top-3 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-blue-500 text-white text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
