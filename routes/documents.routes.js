import { Router } from 'express';
import {
    getDocuments,
    getDocument,
    createDocument,
    updateDocument,
    deleteDocument
} from '../controllers/documents.controllers';

const router = Router();

router.get('/', getDocuments);
router.get('/:id', getDocument);
router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);




export default router;