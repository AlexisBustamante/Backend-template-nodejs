import { Router } from 'express';
import { getDocuments, getDocument, createDocument } from '../controllers/documents.controllers';

const router = Router();

router.get('/', getDocuments);




export default router;