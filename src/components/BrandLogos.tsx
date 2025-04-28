import React from 'react';

const BrandLogos: React.FC = () => {
  const brands = [
    { name: 'Zapier', logo: 'https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Hubspot', logo: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Salesforce', logo: 'https://images.pexels.com/photos/2977549/pexels-photo-2977549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Slack', logo: 'https://images.pexels.com/photos/2977551/pexels-photo-2977551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Stripe', logo: 'https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">Trusted by</p>
        </div>
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={`${brand.name}-${index}`}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 opacity-50 hover:opacity-70 transition-opacity grayscale hover:grayscale-0 mx-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos