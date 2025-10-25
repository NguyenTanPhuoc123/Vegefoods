import React from "react";
import "./RowCircleQuality.css";
import CircleQuality from "../../../../components/CircleQuality/CircleQuality";
type Props = {};

const RowCircleQuality = (props: Props) => {
  return (
    <CircleQuality
      bgColor="#e4b2d6"
      title="FREE SHIPPING"
      description="ON ORDER OVER $100"
      icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4LAA-YQFHVjW80tMufAT2GfzZacyfRh6zg&s"
    />
  );
};

export default RowCircleQuality;
