import express from 'express';
import { PrismaClient } from '@prisma/client';
import  cors from "cors"


const prisma = new PrismaClient();
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());



// Route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
      return res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
