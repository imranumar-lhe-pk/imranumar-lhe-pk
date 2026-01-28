import React from "react";

const ProgressBar = ({ logoNode, name, value }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Icon */}
      <div className="flex-shrink-0">{logoNode}</div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-semibold text-gray-800">{name}</span>
          <span className="text-sm font-semibold text-gray-500">{value}%</span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-700"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
