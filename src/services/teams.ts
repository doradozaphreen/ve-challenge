import { z } from "zod";
import { fetchApi } from "../lib";
import Cookies from "js-cookie";

export const RegisterTeamSchema = z.object({
  name: z.string().min(1),
  userId: z.number().min(1),
});
export type RegisterTeamType = z.infer<typeof RegisterTeamSchema>;
//CREATE TEAM SERVICE
export async function createTeam(data: RegisterTeamType) {
  const result = RegisterTeamSchema.safeParse(data);
  if (!result.success) {
    console.error("Validation failed:", result.error);
    throw new Error("Validation failed");
  }
  try {
    const response = await fetchApi("/team/register", "POST", data);
    const parsedResponse = await response.json();
    return { payload: parsedResponse, status: response.status };
  } catch (error: unknown) {
    console.error("Error during register team", error);
    throw new Error("An unexpected error occurred");
  }
}
// GET TEAMS
export async function getTeams() {
  // const token = String(getCookie("token") || "");
  const token = Cookies.get("token") || "";
  try {
    const response = await fetchApi("/team", "GET", {}, token);
    const parsedResponse = await response.json();
    return { payload: parsedResponse, status: response.status };
  } catch (error: unknown) {
    console.error("Error during register team", error);
    throw new Error("An unexpected error occurred");
  }
}
