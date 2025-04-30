export interface User {
  name: string;
  username: string | null;
  bio: string | null;
  about: string | null;
  website: string | null;
  location: string | null;
  email: string;
  emailVerified: boolean;
  image: string | null;
}

export interface Contact {
  platform: string;
  username: string;
  url: string;
}

export interface Experience {
  organization: string;
  role: string;
  description?: string | null;
  url?: string | null;
  location?: string | null;
  from?: string | null;
  to?: string | null;
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
  id: string;
  name: string;
  description?: string;
  url?: string;
  date?: string | null;
  attachments: File[];
  existingAttachmentsUrls?: string[];
}
