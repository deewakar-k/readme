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
  id?: string;
  name: string;
  date?: string | null;
  url?: string | null;
  description?: string | null;
  attachments?: string | null;
}

export interface ProjectFormData {
  name: string;
  description?: string;
  url?: string;
  date?: string | null;
  attachments: File[];
}
