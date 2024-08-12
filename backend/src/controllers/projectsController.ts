import { Request, Response } from 'express';
import { pool } from '../config/db';
import { projects } from '../data/projectsData';

export const insertProjects = async (req: Request, res: Response) => {
    const query = `
        INSERT INTO Projects (project_id, image, title, development_tools, short_description, dates, project_description)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    for (const project of projects) {
        await pool.query(query, [
            project.id,
            project.image,
            project.title,
            project.developmentTools,
            project.shortDescription,
            project.dates,
            project.projectDescription
        ]);
    }

    res.send('Projects inserted successfully');
};

export const getProjects = (req: Request, res: Response) => {
    res.json(projects);
};