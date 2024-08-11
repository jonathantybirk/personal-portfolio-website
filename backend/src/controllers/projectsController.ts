import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database query failed' });
  }
};
