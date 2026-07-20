import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import LeadFormModal from "../components/LeadFormModal/LeadFormModal";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* <LeadFormModal /> */}
    </>
  );
}
