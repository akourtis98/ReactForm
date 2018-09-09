import React from "react";
import Footer from "./Nav/Footer";
import Header from "./Nav/Header";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
