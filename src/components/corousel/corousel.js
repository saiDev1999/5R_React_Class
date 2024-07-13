import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CustomCorousel({ list }) {
  return (
    <div style={{ height: 100 }}>
      <Carousel width={"30%"} showIndicators={true} dynamicHeight={true}>
        {list.map((each) => {
          return (
            <>
              <div>
                <img src={each.url} height={550} />
                <p className="legend">{each.text}</p>
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CustomCorousel;
