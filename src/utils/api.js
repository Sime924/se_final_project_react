const newsApiBaseUrl =
  process.env.Node_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_key = process.env.REACT_APP_NEWS_API_KEY;

async function searchNews(query) {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const toDate = today.toISOString().split("T")[0];
  const fromDate = weekAgo.toISOString().split("T")[0];

  const url = `${newsApiBaseUrl}?q=${encodeURIComponent(query)}&apikey=${API_key}&from=${fromDate}&to=${toDate}&pageSize=100`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response is not ok");
  }
  return response.json();
}

export { searchNews };
