import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);
  // console.log(url);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
    console.log(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-image">
          <Img src={background} />
        </div>
      )}

      <div className="opacity-layer"></div>
      {/* <div className="wrapper"> */}
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Select from millions of movies, tv shows and more. Explore Now.
          </span>
          <div className="searchInput">
            <input
              onKeyUp={searchQueryHandler}
              type="text"
              name=""
              id=""
              placeholder="Search for movies..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button
              onClick={() => {
                navigate(`/search/${query}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
      {/* </div> */}
    </div>
  );
};

export default HeroBanner;
