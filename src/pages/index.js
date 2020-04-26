import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import StoreCard from "../components/store-card"
import SEO from "../components/seo";

function IndexPage() {
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
    <Layout activeTag="all">
      <SEO title="Home" />
        <section className="card-grid mt-8">
          {data.allDataJson.nodes.map((store) => (
            <StoreCard store={store} key={store.id}/>
          ))}
        </section>
    </Layout>
  );
}

export default IndexPage;
