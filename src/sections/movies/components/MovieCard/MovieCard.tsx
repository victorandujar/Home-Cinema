"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Movie } from "@/modules/movies/domain/Movies";
import { FaRegHeart } from "react-icons/fa";
import { Box, CircularProgress } from "@mui/material";
import environments from "@/sections/shared/utils/environments/environments";
import styles from "./MovieCard.module.scss";
import limitTextLength from "../../../shared/utils/limitTextLength/limitTextLength";
import repositories from "@/sections/shared/utils/repositories/repositories";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateMovieListById } from "@/modules/lists/application/list";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props): React.ReactElement => {
  const dispatch = useAppDispatch();

  const { listId } = useAppSelector((state) => state.lists);
  const { userSession } = useAppSelector((state) => state.user);
  const handleButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const localStorageId = localStorage.getItem("listId");
    const idToFetch = listId !== 0 ? listId : localStorageId;

    event.preventDefault();
    event.stopPropagation();

    await updateMovieListById(
      repositories.lists,
      dispatch,
      idToFetch?.toString()!,
      userSession.session_id,
      movie.id.toString(),
    );
  };

  return (
    <article className={styles.container}>
      <Card
        sx={{
          maxWidth: 345,
          background: "gray",
          height: "450px",
        }}
      >
        <CardMedia
          sx={{ height: 300 }}
          image={`${environments.imageUrl}w400/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent sx={{ padding: 1, height: 90 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 700, fontSize: 18 }}
          >
            {limitTextLength(movie.title, 40)}
          </Typography>
          <Typography>{movie.release_date.split("-")[0]}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: 4,
            margin: 0,
          }}
        >
          <Button style={{ zIndex: 1000 }} onClick={handleButtonClick}>
            <FaRegHeart color="#9C27B0" size={25} />
          </Button>
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={+movie.vote_average.toFixed(1) * 10}
              color="error"
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontWeight: "700" }}>
                {movie.vote_average.toFixed(1)}
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </article>
  );
};

export default MovieCard;
