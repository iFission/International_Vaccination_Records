import { Puff, useLoading } from "@agney/react-loading";
import React from "react";
import "../css/LoadingComponent.css";

const LoadingComponent = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="80" />,
  });

  return (
    <div className="LoadingComponent" {...containerProps}>
      <div>{indicatorEl}</div>
      <div>Loading vaccination data...</div>
    </div>
  );
};

export default LoadingComponent;
