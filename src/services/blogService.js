class BlogService {
  constructor() {
    this.url = "https://jacobasker.micro.blog/feed.json";
  }

  async getAllPosts() {
    const response = await fetch(this.url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`,
      );
    }
    const feed = await response.json();
    
    return feed.items;
  }
}

export default new BlogService();
