const db = require('../models');
const Contact = db.contacts;

// GET all contacts
exports.findAll = (req, res) => {
  Contact.find({})
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

// GET a contact by ID
exports.findOne = (req, res) => {
  Contact.findById(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Contact not found' });
      res.send(data);
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// POST create a new contact
exports.create = (req, res) => {
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
    return res.status(400).send({ message: 'All fields are required.' });
  }
  const contact = new Contact({ firstName, lastName, email, favoriteColor, birthday });
  contact.save()
    .then(data => res.status(201).send({ id: data._id }))
    .catch(err => res.status(500).send({ message: err.message }));
};

// PUT update contact
exports.update = (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Contact not found' });
      res.status(204).send();
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

// DELETE contact
exports.delete = (req, res) => {
  Contact.findByIdAndRemove(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Contact not found' });
      res.status(204).send();
    })
    .catch(err => res.status(500).send({ message: err.message }));
};