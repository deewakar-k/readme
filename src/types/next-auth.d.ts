import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string | null;
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    username?: string | null;
  }
}
