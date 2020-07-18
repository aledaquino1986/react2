import React from "react";

const Category = ({text}) => {
  return (
<div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
              <div className="card-body">
              {text}
              </div>
            </div>
          </div>
  )
}

export default Category;