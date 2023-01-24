import React from "react";

const Sliders = () => {
  return (
    <div className="card max-sm:w-screen flex-wrap max-sm:h-2/4 max-sm:scale-90  w-96 bg-primary text-primary-content">
      <div className="card-body">
        <div className="card-actions justify-start">
          <label>
            Valor mínimo:
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-accent"
            />
          </label>
          <label>
            Valor máximo:
            <input
              type="range"
              min="0"
              max="100"
              value="40"
              className="range range-secondary"
            />
          </label>
          <label>
            Procurar:
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full max-w-xs"
            />
          </label>

          <button className="btn">Filtrar</button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
