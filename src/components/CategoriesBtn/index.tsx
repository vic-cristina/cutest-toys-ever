import React from "react";

const CategoriesBtn = () => {
  return (
    <div className="dropdown dropdown-hover">
      <label tabIndex={0} className="btn m-1">
        Categorias
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesBtn;
