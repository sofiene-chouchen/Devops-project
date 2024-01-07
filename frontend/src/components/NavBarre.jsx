import React from "react";
import { Link } from "react-router-dom";

export default function NavBarre() {
  return (
    <div className="bg-vert">
    <Link to={'/'}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        <p className="text-white text-3xl py-4 font-mono ">Podologue cabinet </p>
      </div>
    </Link>
     
    </div>
  );
}
