const router = require('express').Router();
const contacts = require('../controllers/contacts');

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags:
 *       - Contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 */
router.get('/', contacts.findAll);

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: A single contact
 */
router.get('/:id', contacts.findOne);

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags:
 *       - Contacts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact created
 */
router.post('/', contacts.create);

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact updated
 */
router.put('/:id', contacts.update);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     tags:
 *       - Contacts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact deleted
 */
router.delete('/:id', contacts.delete);

module.exports = router;