import { MovieCardsProps } from "@/common/entity/movieCards";
import { FilmDto } from "../dto/film.dto";

export const mapFilmDtoToEntity = (payload: FilmDto): MovieCardsProps => ({
  id: payload.kinopoiskId,
  title: payload.nameRu || payload.nameEn || "",
  originalTitle: payload.nameOriginal || "",
  poster: payload.posterUrl,
  rating: payload.ratingKinopoisk,
  year: payload.year || 0,
  country: payload.countries?.[0]?.country || "",
  genre: payload.genres?.[0]?.genre || "",
});
