// App.jsx
import { useState } from "react";
import { Footer } from "./Layouts/Footer/Footer";
import { Header } from "./Layouts/Header/Header";
import { Main } from "./Layouts/Main/Main";

export const App = () => {
  
  const [filter, setFilter] = useState(""); // estado del filtro

  return (
    <>
      <Header onFilterChange={setFilter} />
      <Main filter={filter} />
      <Footer />
    </>
  );
};
