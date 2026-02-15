class UnsplashService {
  constructor() {
    this.key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    this.url = `https://api.unsplash.com/users/jacobasker04/photos?client_id=${this.key}&per_page=30`;
  }

  async getAllImages() {
    const response = await fetch(this.url);
    if (!response.ok) throw new Error("Failed to fetch images");
    return await response.json();
  }
}

export default new UnsplashService();
