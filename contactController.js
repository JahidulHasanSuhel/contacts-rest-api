import { contacts } from "./Contacts.js";


export const getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

export const createContact = (req, res) => {
    let {name, phone, email} = req.body;
    let contact = contacts.createContact({
        name,
        phone,
        email
    })
    res.json(contact);
}

export const getContactById = (req, res) =>{
    let {id} = req.params;
    id = parseInt(id);

    let contact = contacts.getContactsById(id);
    res.json(contact);
}

export const updateContact = (req, res) =>{
    let {id} = req.params;
    id = parseInt(id);

    let {name, email, phone} = req.body;
    let contact = contacts.updateContactById(id,{
        name,
        phone,
        email
    })
    res.json(contact);
}

export const deleteContact = (req, res) =>{
    let {id} = req.params;
    id = parseInt(id);

    let contact = contacts.deleteContactById(id);
    res.json(contact);
}