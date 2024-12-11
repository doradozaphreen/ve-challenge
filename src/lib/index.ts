import { getTeams } from "../services/teams";
import { useStoreSelector } from "../store";

const baseUrl = "http://localhost:3000/api/v1"; //import.meta.env.VITE_BASE_URL;

export const useFetchTeams = () => {
  const { setTeams } = useStoreSelector();
  const fetchTeams = async () => {
    try {
      const response = await getTeams();
      setTeams(response.payload);
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching teams");
    }
  };
  return { fetchTeams };
};

export const fetchApi = async (
  route: string,
  method: string,
  body?: object,
  token?: string
): Promise<Response> => {
  console.log(baseUrl);

  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body && method !== "GET" && method !== "DELETE") {
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(`${baseUrl}${route}`, options);
};
