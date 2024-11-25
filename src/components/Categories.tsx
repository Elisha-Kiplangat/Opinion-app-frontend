import React from 'react'

type Category = {
  id: string;
  name: string;
  icon: string; 
};

const categories: Category[] = [
  { id: '1', name: 'Technology', icon: '/icons/tech.svg' },
  { id: '2', name: 'Health', icon: '/icons/health.svg' },
  { id: '3', name: 'Lifestyle', icon: '/icons/lifestyle.svg' },
];

const Categories = () => {
  return (
    <div className='h-60'>
        <section className="container">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition w-48"
            >
              <img src={category.icon} alt={category.name} className="w-8 h-8 mr-4" />
              <span className="text-lg font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Categories