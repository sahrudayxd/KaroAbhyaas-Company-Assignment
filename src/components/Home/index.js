import CommonLayout from "../CommonLayout";
import HomeSwiper from "./HomeSwiper";
import HomeReviews from "./HomeReviews";
import Footer from "../Footer";

const Home = () => (
  <CommonLayout>
    <HomeSwiper />
    <HomeReviews />
    <Footer />
  </CommonLayout>
);

export default Home;
