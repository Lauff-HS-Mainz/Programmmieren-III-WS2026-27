const http = require("node:http");

const PORT = process.env.PORT || 3000;

let nextId = 1;
const todos = [];

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(body === undefined ? undefined : JSON.stringify(body));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function validateTodo(data) {
  if (typeof data.title !== "string" || data.title.trim() === "") {
    return "title must be a non-empty string";
  }
  if (data.completed !== undefined && typeof data.completed !== "boolean") {
    return "completed must be a boolean";
  }
  return null;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const parts = url.pathname.split("/").filter(Boolean);

  if (request.method === "OPTIONS") {
    sendJson(response, 204);
    return;
  }

  const isTodosRoute = parts[0] === "todos";
  const id = parts.length === 2 && /^\d+$/.test(parts[1])
    ? Number(parts[1])
    : null;

  try {
    if (request.method === "GET" && parts.length === 1 && isTodosRoute) {
      sendJson(response, 200, todos);
      return;
    }

    if (request.method === "GET" && parts.length === 2 && id !== null) {
      if (!isTodosRoute) {
        sendJson(response, 404, { error: "Not found" });
        return;
      }
      const todo = todos.find((item) => item.id === id);
      if (!todo) {
        sendJson(response, 404, { error: "Todo not found" });
        return;
      }
      sendJson(response, 200, todo);
      return;
    }

    if (request.method === "POST" && parts.length === 1 && isTodosRoute) {
      const data = await readJson(request);
      const error = validateTodo(data);
      if (error) {
        sendJson(response, 400, { error });
        return;
      }
      const todo = {
        id: nextId++,
        title: data.title.trim(),
        completed: data.completed ?? false,
      };
      todos.push(todo);
      sendJson(response, 201, todo);
      return;
    }

    if (request.method === "PUT" && parts.length === 2 && id !== null && isTodosRoute) {
      const todo = todos.find((item) => item.id === id);
      if (!todo) {
        sendJson(response, 404, { error: "Todo not found" });
        return;
      }
      const data = await readJson(request);
      const error = validateTodo(data);
      if (error) {
        sendJson(response, 400, { error });
        return;
      }
      todo.title = data.title.trim();
      todo.completed = data.completed ?? false;
      sendJson(response, 200, todo);
      return;
    }

    if (request.method === "DELETE" && parts.length === 2 && id !== null && isTodosRoute) {
      const index = todos.findIndex((item) => item.id === id);
      if (index === -1) {
        sendJson(response, 404, { error: "Todo not found" });
        return;
      }
      todos.splice(index, 1);
      sendJson(response, 204);
      return;
    }

    sendJson(response, 404, { error: "Not found" });
  } catch (error) {
    const statusCode = error.message === "Request body is too large" ? 413 : 400;
    sendJson(response, statusCode, { error: error.message });
  }
});

server.listen(PORT, () => {
  console.log(`Todo API listening on http://localhost:${PORT}`);
});
