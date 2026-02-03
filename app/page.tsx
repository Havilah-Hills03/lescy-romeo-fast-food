import HeroSection from "./component/Hero-section"; 
import CatProduct from "./Hero-page-sections/Cat-product";
import MostPopular from "./Hero-page-sections/Most-popular";
import TopProduct from "./Hero-page-sections/Top-Product";

 
export default function Home() {
  return (
    <div
    style={{
      background: 'linear-gradient(167.02deg, #E31E24 12.38%, #B0171C 18%, #7D1114 100%)'
    }}
    >

      {/* hero page  */}
     <HeroSection 
      heroBold="Hot, Fresh meals"
      heroLight="Delivered in 20 minutes"
      btnTitle="Order Now"
      btnClassName="bg-[#f9f9f9] lg:w-[287px] md:w-[287px] text-[#E31E24]"
      heroImg="/home-hero-banner.png"
      heroWidth={386}
      heroHeight={399}
      heroAlt="food Image"
      />

      {/* Top Product  */}
      <TopProduct /> 

      {/* Different Category  */}
      <CatProduct />

      {/* Most Popular  */}
      <MostPopular />
    </div>
  );
}
