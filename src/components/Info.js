import React from "react";

function Info({ data }) {
  if (!data) return null;
  return (
    <div className="info-container">
      <div className="info">
        <p>IP ADDRESS</p>
        <h2>{data.ip}</h2>
        <p>LOCATION</p>
        <h2>
          {data.city}, {data.country_code} {data.postal}
        </h2>
        <p>TIMEZONE</p>
        <h2>{data.timezone}</h2>
        <p>ISP</p>
        <h2>{data.org}</h2>
      </div>
    </div>
  );
}

export default Info;
