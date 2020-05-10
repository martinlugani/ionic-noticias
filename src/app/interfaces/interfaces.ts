// en estasinterfaces podemos  formatear los json que recibimos para pasarlos
// por esta para que ellos tengan un tipo
export interface RespuestaToHeadLine {
    status: string;
    totalResults: number;
    articles: Article[];
  }

export interface Article {
    source: Source;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

export interface Source {
    id?: string;
    name: string;
  }
