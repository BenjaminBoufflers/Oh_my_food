import { Router } from "express";

const router = Router();

router.post('/add', async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
  }
})

export default router;