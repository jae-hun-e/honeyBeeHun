export const request = async (url: string, method: string, body?: any) => {
  try {
    if (method === "GET") {
      const res = await fetch(url, {
        method: "GET",
      });

      if (!res.ok) throw new Error("get에서 뭔가 문제가...");

      return await res.json();
    }

    if (method === "POST") {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("post에서 뭔가 문제가...");

      return await res.json();
    }
  } catch (e) {
    throw e;
  }
};
