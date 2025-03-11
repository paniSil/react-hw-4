import axios from "axios";
import { MessageInterface } from "../types/Message.interface";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchData: Promise<MessageInterface[]> = axios
.get<MessageInterface[]>(API_URL)
.then(response => {
  return new Promise<MessageInterface[]>((resolve) => setTimeout(() => resolve(response.data), 2000))
})
.catch((error) => {
  if (axios.isAxiosError(error)) {
            throw new Error(`Error fetching data: ${error.message}`);
          } else {
            throw new Error(`Unknown error: ${error}`);
          }
})