import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { newsActions } from "../../redux/constants";

const LatestNews = () => {
  const { latestNews } = useSelector(store => store?.news || {});
  const { latestNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  useEffect(()=> {
        dispatch({type: newsActions.GET_LATEST})
  }, [dispatch]);

  return (
    <div>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
    </div>
  );
};

export default LatestNews;
