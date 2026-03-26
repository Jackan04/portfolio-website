class UnsplashService {
  constructor() {
    this.key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    this.url = `https://api.unsplash.com/users/jacobasker04/photos?client_id=${this.key}&per_page=12`;
  }

  async getAllImages(page) {
    const response = await fetch(this.url + `&page=${page}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }
}

export default new UnsplashService();
