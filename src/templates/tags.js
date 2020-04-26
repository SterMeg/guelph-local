import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import StoreCard from "../components/store-card"
import Layout from "../components/layout"

const Tags = ({ data }) => {
  const { nodes } = data.allDataJson
  return (
    <Layout>
      <section className="card-grid mt-8">
        {nodes.map((store) => (
          <StoreCard store={store} key={store.id}/>
        ))}
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  data: PropTypes.shape({
    allDataJson: PropTypes.shape({
      nodes: PropTypes.array, 
    }),
  }),
}

export default Tags

export const query = graphql`
  query($tag: String) {
    allDataJson(filter: { type: { in: [$tag] } }) {
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
`;
