import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Main from "./common/Main";

const TheLayout = () => {
  return (
    <div>
      <Header />
      <main className="">
        <Main />
      </main>
      <Footer />
    </div>
  );
};

export default TheLayout;
