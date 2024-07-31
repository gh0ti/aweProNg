export interface MovieApiModel {
  page: number,
  results: Movie[],
}

export interface Movie {
  id: number,
  title: string,
  year: number,
  duration: number,
  imageUrl: string,
  watched: boolean,
  favorite: boolean,
  rating: number,
  description: string,
  quality: string,
  backdrop_path: string,
  vote_average: number,
  original_language: string,
  popularity: number,
  release_date: string,
  overview: string
}
