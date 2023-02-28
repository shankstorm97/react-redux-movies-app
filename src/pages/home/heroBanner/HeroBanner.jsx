import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

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
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="title">
            select from millions of movies, tv shows and more. Explore Now.
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
      </div>
    </div>
  );
};

export default HeroBanner;
