class UnsplashService {
  constructor() {
    this.key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    if (!this.key) {
      console.warn("VITE_UNSPLASH_ACCESS_KEY is not defined");
    }
    this.url = `https://api.unsplash.com/users/jacobasker04/photos?client_id=${this.key}&per_page=30`;
  }

  async getAllImages() {
    const response = await fetch(this.url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Unsplash API error:", response.status, errorText);
      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`,
      );
    }
    return await response.json();
  }
}

export default new UnsplashService();
