import dotenv from "dotenv";
import process from "process";

dotenv.config();

export default class UnsplashService {
  constructor() {
    this.key = process.env.UNSPLASH_ACCESS_KEY;
    this.username = process.env.UNSPLASH_USERNAME;
    this.url = `https://api.unsplash.com/users/${this.username}/photos?client_id=${this.key}`;
  }

  async getAllImages() {
    try {
      const response = await fetch(this.url);
      const images = await response.json();
      return images;
    } catch (error) {
      throw new Error(error);
    }
  }
}
