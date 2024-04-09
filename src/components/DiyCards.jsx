import React from 'react';

const DiyCards = ({ title, imageSrc, description, isNew, categories }) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-xl rounded-lg overflow-hidden hover:cursor-pointer hover:border-4 hover:border-blue-500">
      <div className="relative">
        <img className="object-cover w-full h-56" src={imageSrc} alt={title} />
        {isNew && (
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded-l-md">
            NEW
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex flex-wrap mt-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="mr-2 mb-2 px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 border border-blue-500 rounded"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiyCards;
