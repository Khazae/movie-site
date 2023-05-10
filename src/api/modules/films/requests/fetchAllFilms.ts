import api from "@/api/request";
import { FilmDto } from "../dto/film.dto";
import { mapFilmDtoToEntity } from "../mappers/filmMappers";

export const fetchAllFilms = async (page: number = 1) => {
  const response = await api.get(`/films?page=${page}&total=7`);
  const filmsDto = response?.data.items as FilmDto[];

  const films = filmsDto.map((filmDto) => mapFilmDtoToEntity(filmDto));

  return [films];
};
