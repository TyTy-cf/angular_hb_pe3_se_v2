import {ApiRandomUserLocation} from "./api-random-user-location";

export interface ApiRandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  }
  location: ApiRandomUserLocation;
  email: string;
  dob: {
    date: Date;
    age: number;
  }

  cell: string;
  picture: {
    large: string;
  }
}

//-webkit-box-shadow: 5px 5px 13px 8px #393939;
// box-shadow: 5px 5px 13px 8px #393939;
