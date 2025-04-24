// Header.jsx
import React from "react";
import Logo from "../../Images/Logo.png";

export const Header = ({ onFilterChange }) => {

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onFilterChange(inputValue); // Llamamos al prop que viene de App
  };

  return (
    <div className="w-[100vw] h-30 bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full h-30 ml-10 gap-5 text-white flex justify-start items-center">
        <img src={Logo} className="w-15" alt="Logo" />
        <h1 className="text-2xl font-bold">Fake Store</h1>
      </div>
      <input
        type="text"
        placeholder="Ingrese el nombre del producto a buscar 🔎"
        className="w-[40%] rounded-2xl border-2 border-white mr-20 p-2 text-black"
        onChange={handleInputChange}
      />
    </div>
  );
};
