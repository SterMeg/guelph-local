import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import React from "react";

function Header() {
  const { title } = useSiteMetadata();

  return (
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span className="text-xl font-bold tracking-tight">
              {title}
            </span>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
