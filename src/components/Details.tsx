// components/Details.tsx
import React from "react";

interface DetailsProps {
  details: string;
}

const Details: React.FC<DetailsProps> = ({ details }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Details</h2>
      <div className="prose prose-sm prose-slate max-w-none">
        <p>{details}</p>
        {/* You can add more structured details here based on your data */}
        {/* For example, if your card data had more fields: */}
        {/* {otherDetail && (
          <p className="text-gray-600">Other Detail: {otherDetail}</p>
        )} */}
      </div>
      {/* You can add more UI elements for the details section, like buttons, images, etc. */}
    </div>
  );
};

export default Details;
