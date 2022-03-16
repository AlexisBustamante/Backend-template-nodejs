import { Router } from 'express';
import {
    getSubcategories,
    getSubcategory,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory
} from '../controllers/subcategories.controllers';

const router = Router();

router.get('/', getSubcategories);
router.get('/:id', getSubcategory);
router.post('/', createSubcategory);
router.put('/:id', updateSubcategory);
router.delete('/:id', deleteSubcategory);

export default router;