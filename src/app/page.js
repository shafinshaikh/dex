import React from "react";

const page = () => {
  return (
    <div>
      <div className="dark:bg-gray-800 min-h-screen dark:text-gray-200 flex-col items-center h-full justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Simple DEX</h1>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-md">
              <label htmlFor="amount" className="block text-sm font-medium text-center mb-4">
                Amount to Exchange
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 pt-3 pb-3 sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 text-black"
                  placeholder="0.00"
                />
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Exchange
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
