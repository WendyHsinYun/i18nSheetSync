// src/services/apiService.ts
export async function uploadLangFiles(payload: object): Promise<any> {
  const response = await fetch(import.meta.env.VITE_APP_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });
  return response.json();
}
