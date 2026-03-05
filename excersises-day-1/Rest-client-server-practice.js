class RestClient {
  constructor(baseURL = "") {
    this.baseURL = baseURL;
  }

  async request(method, endpoint, data = null, headers = {}) {
    const config = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(this.baseURL + endpoint, config);

      // Handle non-2xx responses
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      // Try parsing JSON (if no content, return null)
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      }

      return await response.text();
    } catch (error) {
      console.error("REST Client Error:", error);
      throw error;
    }
  }

  get(endpoint, headers = {}) {
    return this.request("GET", endpoint, null, headers);
  }

  post(endpoint, data, headers = {}) {
    return this.request("POST", endpoint, data, headers);
  }

  delete(endpoint, headers = {}) {
    return this.request("DELETE", endpoint, null, headers);
  }
}

const client = new RestClient("http://localhost:3000");

client
  .get("/posts")
  .then((data) => {
    console.log(data);
    const posts = data;
    console.log(posts[0].views);
  })
  .catch((error) => {
    console.error(error);
  });

client
  .get("/comments")
  .then((data) => {
    console.log(data);
    const comments = data;
    console.log(comments[0].text);
  })
  .catch((error) => {
    console.error(error);
  });

client
  .get("/profile")
  .then((data) => {
    console.log(data);
    const profile = data;
    console.log(profile.name);
  })
  .catch((error) => {
    console.error(error);
  });


  client
  .post("/posts", {
    "id": "3",
    "title": "Title 3",
    "views": 50
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
