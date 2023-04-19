import { IPosts } from './useFetch';

export interface IStateHome {
  page: number;
  perPage: number;
  allPosts: IPosts[];
  posts: IPosts[];
  totalPages: number;
}
