import express from 'express';
import Listing from '../models/Listing';
import { postListing } from '../controllers/listingController';

const router = express.Router();

router.post('/', postListing );

export default router;