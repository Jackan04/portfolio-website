class UnsplashService {
  constructor() {
    this.url = import.meta.env.VITE_UNSPLASH_URL;
    if (!this.url) {
      console.warn("VITE_UNSPLASH_URL is not defined");
    }
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
