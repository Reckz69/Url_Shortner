const UrlResult = ({ shortUrl }) => {
    return (
      <div className="mt-6 p-4 border rounded w-full max-w-md text-center">
        <p className="font-semibold">Short URL</p>
        <a
          href={shortUrl}
          target="_blank"
          className="text-blue-600 underline"
        >
          {shortUrl}
        </a>
      </div>
    );
  };
  
  export default UrlResult;
  