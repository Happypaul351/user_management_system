import express from 'express';

import { createUser, 
         getUser, 
         getUsers, 
         updateUser, 
         deleteUser, 
        } from '../controllers/postControllers.js';
const router = express.Router();

// Retrieve all posts
router.get('/', getUsers);

// Retrieve a single user
router.get('/:id', getUser);

// Create a new post
router.post('/', createUser);

// Update Post
router.put('/:id', updateUser);

// Delete Post
router.delete('/:id', deleteUser);


export default router;
