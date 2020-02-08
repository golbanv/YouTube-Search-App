import axios from "axios";

const KEY = "AIzaSyDWFJZLgApEib4bZMrXohp-8gLd4Ks4rMY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
  }
});
