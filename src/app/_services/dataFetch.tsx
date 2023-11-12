export const request = async (url: string, method: string, body?: any) => {
  try {
    if (method === "GET") {
      const res = await fetch(url, {
        method,
      });

      if (!res.ok) throw new Error("뭔가 문제가...");

      return await res.json();
    }

    if (method === "POST" || method === "PUT" || method === "DELETE") {
      const res = await fetch(url, {
        method,
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("post에서 뭔가 문제가...");

      return await res.json();
    }
  } catch (e) {
    throw e;
  }
};
