import app from './app.ts'; // note the .js if "type": "module"

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
