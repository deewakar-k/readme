export interface User {
  name: string;
  image: string;
  username: string;
  bio: string;
  about: string;
  website: string;
  location: string;
}

export interface Contact {
  platform: string;
  username: string;
  url: string;
}

export interface Experience {
  organization: string;
  role: string;
  location: string;
  description: string;
  from: string;
  to: string;
  url: string;
}
