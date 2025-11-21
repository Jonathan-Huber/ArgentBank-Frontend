import { http } from "./http";

export function getProfile(token) {
  return http("/user/profile", "GET", null, token);
}

export function updateProfile(token, username) {
  return http("/user/profile", "PUT", { userName: username }, token);
}
