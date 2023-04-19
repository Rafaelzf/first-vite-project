export interface IResponse {
  isLoading: boolean;
  data: null | IData;
  error: boolean;
  errorMessage?: string;
}

export interface IData {
  posts: IPosts[];
  photos: IPhotos[];
  users: IUsers[];
}

export interface IPhotos {
  id: number;
  albumId: number;
  title: string;
  thumbnailUrl: string;
}

export interface IPosts {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  geo: IGeo;
  phone: string;
  website: string;
  company: ICompany;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}

export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
