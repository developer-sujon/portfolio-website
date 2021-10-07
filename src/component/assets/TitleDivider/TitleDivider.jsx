import React, { Fragment } from "react";

const TitleDivider = ({DividerTitle, TitleNumber, className}) => {
  return (
    <Fragment>
      <h5 className={`trm-mb-40 trm-title-with-divider ${className}`}>
        {DividerTitle} <span data-number={TitleNumber} />
      </h5>
    </Fragment>
  );
};

export default TitleDivider;
