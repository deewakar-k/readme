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
  organization: string | null;
  role: string | null;
  location: string | null;
  description: string | null;
  from: string | null;
  to: string | null;
  url: string | null;
}

export interface Project {
  name: string | null;
  description: string | null;
  url: string | null;
  date: string | null;
  attachments: string;
}

export interface ProjectFormData {
  name: string | null;
  description: string | null;
  url: string | null;
  date: string | null;
  attachments: File[];
}
