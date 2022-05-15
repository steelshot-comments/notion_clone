import { useState } from "react";

function Select({ options }) {
  const [value, setValue] = useState("None");
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    setValue(e.target.innerText);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-gray-600">{value}</span>
          <svg
            className="h-6 w-6 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-white rounded-lg shadow-lg">
          <div className="flex flex-col">
            {options.map((option) => (
              <div
                key={option}
                className="flex items-center justify-between py-2"
                onClick={handleClick}
              >
                <span className="text-gray-600">{option}</span>
                <svg
                  className="h-6 w-6 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
