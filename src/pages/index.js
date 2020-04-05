import React from "react";
// import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

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
          url
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />

      <section className="text-center">
        <h2>
          Local Guelph and area businesses offering delivery and pick up options during the
          COVID-19 crisis
        </h2>
        <a href="">Submit a business</a>
        <div className="card-grid">
          {data.allDataJson.nodes.map(store => (
            <div className="max-w-sm rounded shadow-lg" key={store.id}>
              <div className="px-6 py-4">
                <h3>{store.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
