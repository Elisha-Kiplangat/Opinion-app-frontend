import React from 'react'

const GetStarted = () => {
  return (
    <div className='h-60'>
        <section className='container'>
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              1
            </div>
            <h3 className="font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create a free account to get started.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              2
            </div>
            <h3 className="font-semibold mb-2">Take Surveys</h3>
            <p className="text-gray-600">Complete surveys that interest you.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
              3
            </div>
            <h3 className="font-semibold mb-2">Earn Rewards</h3>
            <p className="text-gray-600">Redeem points or rewards for participation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted