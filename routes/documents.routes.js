import { Router } from 'express';
import {
    getDocuments,
    getDocument,
    getDocumentsById,
    createDocument,
    updateDocument,
    deleteDocument
    
} from '../controllers/documents.controllers';

const router = Router();

router.get('/', getDocuments);
router.get('/:id', getDocument);
router.get('/subcategory/:id_subcategory', getDocumentsById);

router.post('/', createDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);




export default router;