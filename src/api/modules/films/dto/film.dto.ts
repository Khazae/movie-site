export interface FilmDto {
  kinopoiskId: number;
  imdbId: string | null;
  nameRu: string | null;
  nameEn: string | null;
  nameOriginal: string | null;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk: number;
  ratingImdb: number | null;
  year: number | null;
  countries: { country: string }[];
  genres: { genre: string }[];
  type: string;
}
