import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { forwardRef } from "react";

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  //   console.log(movie);
  return (
    <div ref={ref} className="videoCard">
      <img src={base_url + movie.backdrop_path} alt="" />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {/* {movie.media_type && `${movie.media_type}`} */}
        {movie.release_date || movie.first_air_date}
        <div>
          <ThumbUpIcon className="thumbsUp" />
          {movie.vote_count}
        </div>
      </p>
    </div>
  );
});

export default VideoCard;
