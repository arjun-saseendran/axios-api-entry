import React from "react";
import Header from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Root;
