import PropTypes from "prop-types";
import React from "react";

const InfoGroup = ({ title, content }) => (
  <div className="mb-5 clearfix">
    <h4 className="float-left leading-tight mr-3">{title}:</h4>
    <p className="text-gray-800"> {content}</p>
  </div>
);

InfoGroup.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default InfoGroup;