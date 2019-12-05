const express = require('express')
const router = express.Router()
const Apartments = require('../../models/Apartments.js')


router.post('/', async (req, res) => {
    try {
        const apartment = await Apartments.create(req.body)
        res.send({ msg: 'apartment is created ', data: apartment });
    } catch (error) {
        // We will be handling the error later
        res.status(404).send('Not found')
    }

})

router.get('/', async (req, res) => {
    try {
        const apartments = await Apartments.find();
        if (!apartments) return res.status(404).send({ error: 'apartments do not exist' })
        res.json({ msg: 'You get the apartments', data: apartments })
    }
    catch (error) {
        res.status(404).send('Not found')
    }
});


router.put('/:id', async (req, res) => {
    try {
        const apartmentId = req.params.id
        await Apartments.findOneAndUpdate({ '_id': apartmentId }, req.body)
        res.json('updated successefully');
    } catch (error) {
        // We will be handling the error later
        res.status(404).send('Not found')
    }
});
module.exports = router;