class UnsplashService {
  constructor() {
    this.url = import.meta.env.VITE_UNSPLASH_URL;
  }

  async getAllImages(page) {
    const response = await fetch(this.url + `&page=${page}`);

    if (!response.ok) {
      const errorText = await response.text();

      if (import.meta.env.DEV) {
        console.error("Unsplash API error:", response.status, errorText);
      }

      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`,
      );
    }

    return response.json();
  }
}

export default new UnsplashService();
