import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Story Tale | Home</title>
      </Helmet>
      <h2 className="text-4xl">This is Homepage</h2>
    </div>
  );
};

export default Home;
