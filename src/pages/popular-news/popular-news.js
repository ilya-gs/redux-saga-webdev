import { useSelector } from "react-redux";
import News from "../../components/news/news";

const PopularNews = () => {
  const { popularNews, isLoading } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});

  return (
    <div>
      {isLoading ?
        <h3>Loading Data</h3> :
        <News news={popularNews} error={popularNewsError} title="Popular News" />
      }
    </div>
  );
};

export default PopularNews;
