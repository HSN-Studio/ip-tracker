import React from "react";

function Info({ data }) {
  if (!data) return null;
  return (
    <div className="info-container">
      <div className="info">
        <span>
          <p>IP ADDRESS</p>
          <h3>{data.ip}</h3>
        </span>

        <span>
          <p>LOCATION</p>
          <h3>
            {data.city}, {data.country_code} {data.postal}
          </h3>
        </span>
        <span>
          <p>TIMEZONE</p>
          <h3>{data.timezone}</h3>
        </span>
        <span>
          <p>ISP</p>
          <h3>{data.org}</h3>
        </span>
      </div>
    </div>
  );
}

export default Info;
