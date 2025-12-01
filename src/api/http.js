const BASE_URL = "http://localhost:3001/api/v1";

export async function http(endpoint, method = "GET", body, token) {
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = { method, headers };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, config);
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const error = new Error(data?.message || "Erreur API");
    error.status = res.status;
    throw error;
  }

  return data;
}
