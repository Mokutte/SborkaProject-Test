export interface SneakerState {
  id: number;
  name: string;
  img: string;
  imghd: string;
  price: number;
}

export interface BasketState {
  id: number;
  name: string;
  img: string;
  price: number;
  counter?: number;
}

export interface SneakerInfo {
  id?: number;
  name?: string;
  img?: string;
  price?: number;
}
