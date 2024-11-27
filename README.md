# Receipt Processor

This project is a full-stack application that processes receipts and calculates points based on predefined rules. The backend is built using Node.js with Express, while the frontend is built using React with Vite. The application is Dockerized for ease of deployment.

## Getting Started

Follow the steps below to clone, set up, and test the application.

### Prerequisites

Ensure the following are installed on your system:

- Docker: Version 20+
- Docker Compose: Version 3+ (Comes bundled with Docker Desktop)
- Git

### Cloning the Repository

```text
git clone "https://github.com/mihirvaidya221998/receipt-processor-challenge.git"
cd receipt-processor-challenge
```

### Running the Application with Docker

1. Build the Docker Images. In the project root directory, run:

```text
docker compose build
```

2. Run the Containers. Start the application using:

```text
docker compose up
```

3. Access the Application

- Frontend: Open http://localhost:5173 in your browser.
- Backend: API endpoints are accessible at http://localhost:3000.

4. Stop the Containers. When done testing, stop the containers:

```text
docker compose down
```

---

## Testing the Frontend

1. Open http://localhost:5173 in your browser.
2. Use the forms on the page to:

- Submit a receipt JSON to the Process Receipt form.
- Enter the receipt ID returned by the backend in the Get Points form to retrieve points.

---

## Testing the Backend

I have created a web application but to test API only you can use a tool like Postman or curl to test these endpoints:

- Example POST:

```text
curl -X POST http://localhost:3000/receipts/process \
     -H "Content-Type: application/json" \
     -d '{"retailer":"Target","purchaseDate":"2022-01-01","purchaseTime":"13:01","total":"35.35","items":[{"shortDescription":"Mountain Dew 12PK","price":"6.49"}]}'
```

- Example GET:

```text
curl http://localhost:3000/receipts/<your-receipt-id>/points
```
