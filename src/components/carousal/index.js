import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.wow.lk/wowdocroot/content/1.3/images/2017/homechanges/carousal/huawei-p-c-banner.jpg"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.wow.lk/wowdocroot/content/1.3/images/2017/homechanges/carousal/ibue-c-banner.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.wow.lk/wowdocroot/content/1.3/images/2017/homechanges/carousal/ramazan-c-banner.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default CarouselPage;