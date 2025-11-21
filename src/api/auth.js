import { http } from "./http";

export function login(email, password) {
  return http("/user/login", "POST", { email, password });
}

export function signup(payload) {
  return http("/user/signup", "POST", payload);
}
