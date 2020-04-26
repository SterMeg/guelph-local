import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  const { contact } = useSiteMetadata();

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-200">
      <Header />

      <main className="flex-1 w-full max-w-6xl px-4 mx-auto md:px-8 pb-8">
        {children}
      </main>

      <footer className="bg-teal-700">
        <nav className="flex justify-between flex-wrap max-w-6xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white text-sm w-full mb-4">
            This data is crowdsourced and/or sourced from the web. If you would
            like to update information about a business listed, please contact{" "}
            <a
              className="font-bold text-white no-underline"
              href={`mailto:${contact}`}
            >
              {contact}
            </a>
          </p>

          <p className="text-white">
            Inspired by{` `}
            <a
              className="font-bold text-white no-underline"
              href="https://togethertech.ca/local"
              target="_blank"
              rel="noopener noreferrer"
            >
              Together Tech
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
