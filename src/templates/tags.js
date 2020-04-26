import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { nodes } = data.allDataJson
  return (
    <div>
      <h1>{tag}</h1>
      {nodes.map((store) => (
        <h2 key={store.id}>{store.name}</h2>
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
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          delivery: PropTypes.bool,
          details: PropTypes.string,
          goods: PropTypes.string,
          location: PropTypes.string,
          name: PropTypes.string.isRequired,
          pickups: PropTypes.bool,
          other: PropTypes.string,
          url: PropTypes.string,
          alt: PropTypes.string
        }),
      ), 
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
