import UrlForm from "../components/UrlForm";
import UrlResult from "../components/UrlResult";
import { useState } from "react";

const Home = () => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="flex flex-col items-center mt-20">
      <UrlForm setShortUrl={setShortUrl} />
      {shortUrl && <UrlResult shortUrl={shortUrl} />}
    </div>
  );
};

export default Home;
