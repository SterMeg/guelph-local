import React from "react"
import PropTypes from "prop-types"
import InfoGroup from "../components/info-group";
import Img from "gatsby-image";

const StoreCard = ({store}) => (
    <div
      className="max-w-sm rounded shadow-lg  bg-white w-full"
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
        <InfoGroup title="Goods/Services" content={store.goods} />
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
        {store.other && (
          <div className="mb-5 clearfix">
            <h4 className="float-left leading-tight mr-3">Other:</h4>
            <p className="text-gray-800">{store.other}</p>
          </div>
        )}
        <InfoGroup title="Location" content={store.location} />
        {store.details && (
          <InfoGroup title="More Info" content={store.details} />
        )}
      </div>
    </div>
)

export default StoreCard

StoreCard.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.string.isRequired,
    delivery: PropTypes.bool,
    details: PropTypes.string,
    goods: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string.isRequired,
    pickup: PropTypes.bool,
    other: PropTypes.string,
    url: PropTypes.string,
    alt: PropTypes.string,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  }),
};