export interface User {
  name: string | null;
  image: string | null;
  username: string | null;
  bio: string | null;
  about: string | null;
  website: string | null;
  location: string | null;
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

export interface Project {
  name: string;
  description: string;
  url: string;
  date: string;
  attachments: string;
}

export interface ProjectFormData {
  name: string | null;
  description: string | null;
  url: string | null;
  date: string | null;
  attachments: File[];
}
