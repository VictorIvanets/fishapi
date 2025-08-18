import { PaidFishingT } from './fishings.model';
export declare class FishingsDto {
    title: string;
    description: string;
    score: number;
    date: string;
    coords: number[];
    img: ImageT[];
    weather: WeatherT;
    paid?: PaidFishingT;
}
export type ImageT = {
    url: string;
    imgId: string;
};
export type WeatherT = {
    deg: number;
    feels_like: number;
    grnd_level: number;
    gust: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    sky: string;
    speed: number;
    temp: number;
    temp_max: number;
    temp_min: number;
};
