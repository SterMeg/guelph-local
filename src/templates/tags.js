import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import StoreCard from "../components/store-card"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes } = data.allDataJson
  return (
    <div>
      <h1>{tag}</h1>
      {nodes.map((store) => (
        <StoreCard store={store} key={store.id}/>
      ))}
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
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
