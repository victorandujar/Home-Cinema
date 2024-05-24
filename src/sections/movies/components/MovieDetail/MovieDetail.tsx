"use client";

import ImageCustom from "@/sections/shared/components/ImageCustom/ImageCustom";
import environments from "@/sections/shared/utils/environments/environments";
import { useAppSelector } from "@/store/hooks";
import { TfiWorld } from "react-icons/tfi";
import { RxTimer } from "react-icons/rx";
import { FaLanguage } from "react-icons/fa6";
import { RiMovie2Line } from "react-icons/ri";
import styles from "./MovieDetail.module.scss";

const MovieDetail = (): React.ReactElement => {
  const { movie } = useAppSelector((state) => state.movies);
  return (
    <main className={styles.detailPage}>
      <div className={styles.detailsTopInfo}>
        <div className={styles.detailsHeader}>
          <div>
            <h2 className={styles.detailsTitle}>{movie?.title}</h2>
            <span className={styles.detailsTagline}>{movie?.tagline}</span>
          </div>
          <div className={styles.detailsMovieRate}>
            <span className={styles.detailsVotes}>
              {movie?.vote_average?.toFixed(1)}
            </span>
            <span className={styles.detailsVoteNumber}>
              ({movie?.vote_count})
            </span>
          </div>
        </div>
        <div className={styles.detailsRelease}>
          <span className={styles.detailsStatus}>{movie?.status} at</span>
          <span className={styles.detailsInfo}>
            {movie?.status === "Released" ? movie?.release_date : ""}
          </span>
        </div>
      </div>
      <div className={styles.detailsInformation}>
        <ImageCustom
          image={`${environments.imageUrl}w400/${movie?.poster_path}`}
          alt={movie.title}
          className={styles.detailsImage}
          height={50}
          width={50}
        />
        <div className={styles.detailsMovieInfo}>
          <div className={styles.detailsProductionCompanies}>
            {movie?.production_companies?.map(
              (company) =>
                company.logo_path && (
                  <ImageCustom
                    image={`${environments.imageUrl}w500${company.logo_path}`}
                    alt={company.name}
                    className={styles.detailsCompanyImage}
                    height={50}
                    width={50}
                    key={company.id}
                  />
                ),
            )}
          </div>
          <div className={styles.detailsCountryProduction}>
            <TfiWorld />
            {movie?.production_countries?.map((country) => (
              <span key={country.name}>{country.name}</span>
            ))}
          </div>
          <div className={styles.detailsOverview}>
            <h4 className={styles.detailsSectionTitle}>Overview</h4>
            <span className={styles.detailsOverviewText}>
              {movie?.overview}
            </span>
          </div>
          <div className={styles.detailsRuntime}>
            <RxTimer />
            <span className={styles.detailsInfo}>{movie?.runtime} minutes</span>
          </div>
          <div className={styles.detailsLanguage}>
            <FaLanguage />
            {movie?.spoken_languages?.map((language) => (
              <span className={styles.detailsInfo} key={language.english_name}>
                {language?.english_name}
              </span>
            ))}
          </div>
          <div className={styles.detailsGenres}>
            <RiMovie2Line />
            {movie?.genres?.map((genre) => (
              <span className={styles.detailsInfo} key={genre.name}>
                {genre?.name}
              </span>
            ))}
          </div>
          <a href={movie?.homepage}>{movie?.homepage}</a>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
