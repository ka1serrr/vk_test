import { API_URL } from "~app";

type Fetch = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  signal?: AbortSignal;
};

type Query = Pick<Fetch, "path" | "signal">;

class FetchClient {
  private API_URL = API_URL;

  private async $fetch<T>({ path, method, signal }: Fetch) {
    const url = `${this.API_URL}${path}`

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json"},
        signal,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Fetch error ${response.status} ${response.statusText}`);
      }

      return data as T;
    } catch (error) {
      console.log("Fetch error", error);
      const stringedError = error as string;
      throw new Error(stringedError);
    }
  }

  async get<T>({ path, signal }: Query) {
    return this.$fetch<T>({ path, method: "GET", signal });
  }
}

export const $fetch = new FetchClient();