import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

const items = [
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706547515/mommys-carrot-cake_q1cpoj.jpg",
    altText: "Mommy's Carrot Cake",
    key: 1,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706416608/bday-cake_u6ivhn.jpg",
    altText: "Birthday Cake",
    key: 2,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706491307/unicorn-cake_olzonn.jpg",
    altText: "Unicorn Cake",
    key: 3,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706415571/honey-cake_hcmhqo.jpg",
    altText: "Honey Cake",
    key: 4,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706491176/chocolate-cake2_zslhz0.jpg",
    altText: "Chocolate Cake",
    key: 5,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706491265/chocolate-pb-cheesecake_zqudfg.jpg",
    altText: "Chocolate Cheesecake",
    key: 6,
  },
  {
    src: "https://res.cloudinary.com/dl11m63ow/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1706416401/grapefruit-cake_qae1rt.jpg",
    altText: "Grapefruit Cake",
    key: 7,
  },
];

const Slider = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{height:"600px"}} src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Slider;
