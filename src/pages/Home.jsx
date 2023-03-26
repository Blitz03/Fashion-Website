import Landing from "../components/Landing";
import Ads from "../components/Ads";
import Quote from "../components/Quote";
import Features from "../components/Features";
import MainProduct from "../components/MainProduct";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <Landing />
      <MainProduct />
      <Ads />
      <Products section="Favourite Products" />
      <Quote />
      <Features />
    </>
  );
}
