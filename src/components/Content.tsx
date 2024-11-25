import React from 'react'

type Survey = {
  id: string;
  title: string;
  description: string;
  deadline: string;
  estimatedTime: string;
};

const featuredSurveys: Survey[] = [
  {
    id: '1',
    title: 'Tech Trends 2024',
    description: 'Share your thoughts on emerging technologies.',
    deadline: 'Nov 30, 2024',
    estimatedTime: '5 mins',
  },
  {
    id: '2',
    title: 'Healthy Habits Survey',
    description: 'Help us understand lifestyle habits worldwide.',
    deadline: 'Dec 10, 2024',
    estimatedTime: '7 mins',
  },
];

const Content = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Surveys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredSurveys.map((survey) => (
            <div
              key={survey.id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{survey.title}</h3>
              <p className="text-gray-600 mb-2">{survey.description}</p>
              <p className="text-sm text-gray-500">
                Deadline: <strong>{survey.deadline}</strong> | Estimated Time: <strong>{survey.estimatedTime}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Content