import express from 'express';
import Listing from '../models/Listing.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newListing = new Listing(req.body); 
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create listing' });
  }
});

export default router;