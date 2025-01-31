import express from "express";
export const router = express.Router();
import {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} from './contactController.js';

//this is all for all contacts
router.get('/', getAllContacts);

router.post('/', createContact);

//this is for single contacts
router.get('/:id', getContactById);

router.put('/:id', updateContact);

router.delete('/:id',deleteContact);