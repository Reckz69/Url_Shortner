import { useState } from "react";
import { shortenUrl } from "../api/url.api";

const UrlForm = ({ setShortUrl }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await shortenUrl(url);
    setShortUrl(data.shortUrl);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        type="url"
        placeholder="Enter long URL"
        required
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <button className="w-full mt-4 bg-black text-white p-3 rounded">
        {loading ? "Shortening..." : "Shorten URL"}
      </button>
    </form>
  );
};

export default UrlForm;
