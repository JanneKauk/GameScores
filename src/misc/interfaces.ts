export interface game {
    Id: number;
    title: string;
    platforms: plat[];
    images: image;
    ReleaseDate: string;
    Description: string;
    avgscores: number;
}

export interface review {
    id: number;
    ReviewTitle: string;
    ReviewText: string;
    ReviewScore: number;
    username: string;
    gameId: number;
}

interface plat {
    Id: number;
    Name: string;

}

interface image {
    Id: number;
    URL: string;
}