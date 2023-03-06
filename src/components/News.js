import { useState,useEffect } from 'react'; 
import axios from "axios";
import NewsItems from './NewsItems';
import '../News.css';
function News() {
  let hi =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=e03f10dd7c824e928bddb2329d3d5756";
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios
      .get(hi)
      .then((res) => {
        setVal(res.data.articles);
      })
    // eslint-disable-next-line
  }, []);
  return (
    <div className="news">
      
      <h1 style={{ marginLeft: "40%", marginTop: "3%" }}>Top News</h1>
      <div className="news-items">
        {val.map((x) => (
          <NewsItems
            key={x.title}
            title={x.title}
            description={x.description}
            img={x.urlToImage}
          />
        ))}
      </div>
    </div>
  );
}

export default News