class HttpService {
  private signal?: AbortController["signal"];

  constructor(signal?: AbortController["signal"]) {
    this.signal = signal;
  }

  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(url, {
        signal: this.signal,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (err) {
      throw new Error(`Error fetching data from ${url}: ${err}`);
    }
  }
}

export default HttpService;
