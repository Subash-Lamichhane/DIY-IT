import React from 'react'

const DiyCards = ({ title, imageSrc, description, isNew, categories }) => {
  return (
    <div className="w-96 bg-base-100 shadow-xl rounded-lg overflow-hidden">
    <figure>
      <img src={imageSrc} alt={title} />
    </figure>
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800">
        {title}
        {isNew && <div className="inline-block ml-2 px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded">NEW</div>}
      </h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex justify-end mt-4">
        {categories.map((category, index) => (
          <div key={index} className="mr-2 px-2 py-1 text-sm font-semibold text-blue-500 border border-blue-500 rounded">{category}</div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default DiyCards