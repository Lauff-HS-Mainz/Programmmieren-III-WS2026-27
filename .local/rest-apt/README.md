# Todo REST API

A dependency-free Node.js REST API backed by memory.

## Run

```bash
cd .local/rest-apt
npm start
```

Optional port:

```bash
PORT=4000 npm start
```

## Endpoints

| Method | Route | Description |
| --- | --- | --- |
| GET | `/todos` | List todos |
| GET | `/todos/:id` | Get one todo |
| POST | `/todos` | Create a todo |
| PUT | `/todos/:id` | Replace a todo |
| DELETE | `/todos/:id` | Delete a todo |

Example:

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn Node.js","completed":false}'
```
