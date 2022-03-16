import { Router } from 'express';

import {
    getRoles,
    getRole,
    createRole,
    updateRole,
    deleteRole
} from '../controllers/roles.controllers';
const router = Router();
router.get('/', getRoles);
router.get('/:id', getRole);
router.post('/', createRole);
router.put('/:id', updateRole);
router.delete('/:id', deleteRole);

export default router;