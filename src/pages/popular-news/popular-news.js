import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { newsActions } from "../../redux/constants";

const PopularNews = () => {
  const { popularNews } = useSelector(store => store?.news || {});
  const { popularNewsError } = useSelector(store => store?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: newsActions.GET_POPULAR })
  }, [dispatch]);


  return (
    <div>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default PopularNews;
