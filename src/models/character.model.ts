import { Location } from './location.model';
export interface Character {
  id: number;
  name: string;
  status:string;
  species:string;
  type:string;
  gender:string;
  origin:Location;
  image:string;
  episode:string[];
  url:string;
  created:string;
  location: Location;
}
