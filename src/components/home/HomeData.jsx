import home1Dskt from "../../../../images/desktop-image-hero-1.jpg";
import home2Dskt from "../../../../images/desktop-image-hero-2.jpg";
import home3Dskt from "../../../../images/desktop-image-hero-3.jpg";
import home1Mbl from "../../../../images/mobile-image-hero-1.jpg";
import home2Mbl from "../../../../images/mobile-image-hero-2.jpg";
import home3Mbl from "../../../../images/mobile-image-hero-3.jpg";

const HomeData = [
  {
    id: "home1",
    title: "Discover innovative ways to decorate",
    article:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make property a reflection of you and what you love",
    img_url: {
      desktop: home1Dskt,
      mobile: home1Mbl,
    },

    img_alt: "home_first_image",
  },
  {
    id: "home2",
    title: "We are available all across the globe",
    article:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img_url: {
      desktop: home2Dskt,
      mobile: home2Mbl,
    },
    img_alt: "home_second_image",
  },
  {
    id: "home3",
    title: "Manufactured with the best materials",
    article:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img_url: {
      desktop: home3Dskt,
      mobile: home3Mbl,
    },
    img_alt: "home_third_image",
  },
];

export default HomeData;
