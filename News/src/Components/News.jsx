import { useState, useEffect } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  function fetchdata() {
    setLoading(true);
    setCurrentPage(1);

    fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=4adb99b0db754b89af23f7d156d4afee`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== "ok") throw new Error();
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Data Not available");
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  // pagination
  const lastIndex = itemPerPage * currentPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(news.length / itemPerPage);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>{error}</h1>;
  if (news.length === 0) return <h2>No News Found</h2>;

  return (
    <div>
      <h3>Latest News</h3>

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchdata}>Search</button>

      {currentNews.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      {/* pagination */}
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

         {[...Array(totalPages)].map((_, i) => (     //agar yaha pr hm without spread operator array use krenge then aaray ke andar bydefault null hoga and map iterate nhi kr payega array pr thats why we use spread operator so that we can itrate
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <span> Page {currentPage} / {totalPages} </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}