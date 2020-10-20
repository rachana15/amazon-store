import React from "react";
import "../style/css/Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <AliceCarousel
          autoPlay
          autoPlayInterval="3000"
          disableDotsControls="false"
          disableSlideInfo="false"
          disableButtonsControls="false"
          infinite="true"
        >
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/apub/Elsewhere/Elsewhere_GW_DesktopHero_3000x1200._CB405350248_.jpg"
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/GW/HERO/desktop/GWDH_SND_01_2x._CB418675392_.jpg"
            className="home__image"
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/dash/trafficdrivers/Q4_2020_HolidayDash_TrafficDrivers_Desktop_Hero_V1B_3000x1200._CB405378406_.jpg"
            className="home__image"
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/tahoe/gateway/P37156875_US-EN_GW_Hero_DWK_Desktop_3000x1200_Hol._CB418764039_.jpg"
            className="home__image"
          />
        </AliceCarousel>
        <div className="home__row">
          <Product
            id="12234567"
            title="New Apple iPhone 12 (64GB, Black) [Locked] + Carrier Subscription"
            price={899}
            image="https://m.media-amazon.com/images/I/71fVoqRC0wL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />

          <Product
            id="1998765"
            title="All-new Fire HD 8 tablet, 8 HD display, 32 GB, designed for portable entertainment, Black"
            price={89}
            image="https://m.media-amazon.com/images/I/61jIs7q6SML._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1998763"
            title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage, Fingerprint ID and Facial Recognition, Long-Lasting Battery, Cosmic Gray"
            price={999}
            image="https://m.media-amazon.com/images/I/61nSb8Jn7oL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />

          {/* Product*/}
          {/* Product*/}
        </div>
        <div className="home__row">
          <Product
            id="1998763"
            title="Amazon Essentials Men's Full-Zip Hooded Fleece Sweatshirt"
            price={19}
            image="https://m.media-amazon.com/images/I/813QufEjhML._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1998764"
            title="Women's Stretch Pull-On Jegging"
            price={28}
            image="https://m.media-amazon.com/images/I/71yIzZV4dGL._AC_UL640_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="1998766"
            title="Women's Classic Fit Long-Sleeve Full-Zip Polar Soft Fleece Jacket"
            price={20}
            image="https://m.media-amazon.com/images/I/81gt-f2v9rL._MCnd_SEARCH281250_AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1998767"
            title="Women's French Terry Fleece Jogger Sweatpant"
            price={18}
            image="https://m.media-amazon.com/images/I/81WbRdR771L._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          {/* Product*/}
          {/* Product*/}
          {/* Product*/}
        </div>
        <div className="home__row">
          <Product
            id="1998768"
            title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
            price={129}
            image="https://m.media-amazon.com/images/I/41ZoJhMEP7L._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="1998769"
            title="SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)"
            price={397}
            image="https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
          {/* Product*/}
          {/* Product*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
