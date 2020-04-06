import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image"


function IndexPage() {
  const { description, formLink } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          id
          delivery
          details
          goods
          location
          name
          pickup
          other
          url
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />

      <section className="">
        <h2 className="mb-5 text-gray-800">{description}</h2>
        <a
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded inline-block"
          href={formLink}
        >
          Submit a business
        </a>
        <div className="card-grid mt-8">
          {data.allDataJson.nodes.map((store) => (
            <div
              className="max-w-sm rounded shadow-lg  bg-white"
              key={store.id}
            >
              <div className="px-6 py-4">
                <header className="text-center mb-8">
                  <a href={store.url}>
                    <h3 className="mb-1 text-gray-800">{store.name}</h3>
                  </a>
                  <a
                    className="text-teal-700 hover:text-teal-800 font-bold inline-block underline  mb-5"
                    href={store.url}
                  >
                    Visit Website
                  </a>
                  {store.image && (
                    <a href={store.url}>
                      <Img
                        alt={store.alt}
                        sizes={{
                          ...store.image.childImageSharp.fluid,
                          aspectRatio: 16 / 9,
                        }}
                      />
                    </a>
                  )}
                </header>
                <div className="mb-5 clearfix">
                  <h4 className="float-left leading-tight mr-3">
                    Goods/Services:
                  </h4>
                  <p className="text-gray-800"> {store.goods}</p>
                </div>
                <div className="grid grid-cols-2 gap-5 mb-5">
                  <div>
                    <h4 className="mb-1">Delivery?</h4>
                    <p
                      className={`text-center text-white rounded p-1 ${
                        store.delivery ? "bg-teal-700  " : "bg-gray-700"
                      }`}
                    >
                      {store.delivery ? "Yes" : "No"}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1">Pickup?</h4>
                    <p
                      className={`text-center text-white rounded p-1 ${
                        store.pickup ? "bg-teal-700  " : "bg-gray-700"
                      }`}
                    >
                      {store.pickup ? "Yes" : "No"}
                    </p>
                  </div>
                </div>
                {store.other && <div className="mb-5 clearfix">
                  <h4 className="float-left leading-tight mr-3">Other:</h4>
                  <p className="text-gray-800">{store.other}</p>
                </div>}
                <div className="mb-5 clearfix">
                  <h4 className="float-left leading-tight mr-3">Location:</h4>
                  <p className="text-gray-800">{store.location}</p>
                </div>
                <div className="clearfix">
                  <h4 className="float-left leading-tight mr-3">More Info:</h4>
                  <p className="text-gray-800">{store.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
