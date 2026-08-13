export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string;
  updatedAt: string;
  author?: {
    name: string;
    picture: string;
    isVerified: boolean;
  };
}

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface IPostResponse {
  data: IPost[];
  meta: IMeta;
}

export interface IProject {
  id: string | number;
  title: string;
  content: string;
  thumbnail: string;
  techStack: string[];
  livelink: string;
  repolink: string;
}
