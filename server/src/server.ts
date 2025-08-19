import app from './app.ts'; // note the .js if "type": "module"
import cors from 'cors';

app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
