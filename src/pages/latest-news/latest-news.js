import { useSelector } from "react-redux";
import News from "../../components/news/news";

const LatestNews = () => {
  const { latestNews, isLoading } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});


  return (
    <div>
      {isLoading ?
        <h3>Loading Data</h3> :
        <News news={latestNews} error={latestNewsError} title="Latest News" />
      }
    </div>
  );
};

export default LatestNews;
