import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_BACKEND_API_URL);

export default pb;
