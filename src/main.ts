import { Elysia } from 'elysia';

const app = new Elysia();

app.get('/', () => 'Beverbende scores');

// Endpoint for retrieving scorecards
app.get('/scorecards', async () => {
  // Replace with actual data fetching logic
  return [
    { id: 1, name: 'Nino', score: 47 },
    { id: 2, name: 'Niet Nino', score: 99 },
  ];
});

// Endpoint for creating/updating a scorecard
app.post('/scorecards', async ({ body }) => {
  // Replace with actual save logic
  return { success: true, data: body };
});

app.listen(3000, () => {
  console.log(`Elysia server running on http://localhost:3000`);
});