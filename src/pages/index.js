import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import Layout from "../components/layout";
import StoreCard from "../components/store-card"
import SEO from "../components/seo";

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
          type
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

      <section>
        <h2 className="mb-5 text-gray-800">{description}</h2>
        <a
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded inline-block"
          href={formLink}
        >
          Submit a business
        </a>
        <div className="card-grid mt-8">
          {data.allDataJson.nodes.map((store) => (
            <StoreCard store={store} key={store.id}/>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
