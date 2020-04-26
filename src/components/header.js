import { Link, useStaticQuery, graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import _ from "lodash";
import React from "react";

function Header() {
  const { title, description, formLink } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        group(field: type) {
          fieldValue
        }
      }
    }
  `)

  const links = data.allDataJson.group

  return (
    <header>
      <div className="bg-teal-700">
        <div className="flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:p-8">
          <Link to="/">
            <h1 className="flex items-center text-white no-underline">
              <span className="text-xl font-bold tracking-tight">{title}</span>
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8">
        <h2 className="mb-5 text-gray-800">{description}</h2>
        <a
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded inline-block"
          href={formLink}
        >
          Submit a business
        </a>
        <nav>
          <ul>
            <li><Link to="/">all</Link></li>
            {links.map(link => (
              <li key={link.fieldValue}>
                <Link to={`/${_.kebabCase(link.fieldValue)}`}>
                  {link.fieldValue}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
