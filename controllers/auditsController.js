const db = require('../models');

//index
const index = (req, res) => {
    db.Audit.find({}, (error, foundAudits) => {
        if(error) {
            console.log('Error in Audits index:', error);
        }

        if(!foundAudits) {
            return res.json({
                message: 'No Audits found in DB.'
            })
        }
    })
}

//show
const show = (req, res) => {
    db.Audit.findById(req.params.id, (error, foundAudit) => {
        if(error) {
            console.log('Error in Audit Show:', error)

            if(!foundAudit) return res.json({
                message: 'There is no audit with this ID in db'
            })

            return res.send('Incomplete audit show controller function');

        }

        res.status(200).json({
            audit: foundAudit
        });
    });
};

//create
const create = (req, res) => {
    db.Audit.create(req.body, (error, savedAudit) => {
        if(error) {
            conosle.log('Error in Audit create:', error)
        }

        res.status(201).json({ audit: savedAudit })
    })
}

//update
const update = (req, res) => {
    db.Audit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedAudit) => {
        if(error) {
            console.log('Error in Audits', error);

            return res.send('Incomplete Audits')
        }

        res.status(200).json({
            updatedAudit
        })
    })
}

//delete
//currently won't be a function, but want to have it available
//for if we want to add it in later. we want tickets/audits to remain
//forever so there's a record of it. It should only be deleted if
//the company is deleted
const destroy = (req, res) => {
    db.Audit.findByIdAndDelete(req.params.id, (error, deletedAudit) => {
        if (error) {
            console.log('Error in Audit destroy:', error)

            return res.send('Incomplete Audit delete controller function')
        }

        res.status(200).json({
            deletedAudit
        })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};