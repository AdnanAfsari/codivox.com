export interface FeaturedImage {
  node: {
    altText: string;
    title: string;
    sourceUrl: string;
  };
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  featuredImage?: FeaturedImage;
  author: {
    node: {
      avatar: {
        url: string;
      };
      name: string;
    };
  };
  categories: {
    nodes: {
      slug: string;
      name: string;
    }[];
  };
}

export interface PostDetail extends Post {
  excerpt?: string;
  content: string;
  tags: {
    nodes: {
      slug: string;
      name: string;
    }[];
  };
}

export interface BlogPostsProps {
  wpgraphql: {
    posts: {
      nodes: Post[];
    };
  };
}

export interface SinglePostProps {
  wpgraphql: {
    post: PostDetail;
  };
}
