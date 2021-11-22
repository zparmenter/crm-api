const db = require('../models');

//index
const index = (req, res) => {
    db.Company.find({}, (error, foundCompanies) => {
        if(error) {
            console.log('Error in Companies index:', error)
        }

        if(!foundCompanies) {
            return res.json({
                message: 'No Companies found in DB.'
            })
        } 
            
        res.status(200).json({ companies: foundCompanies });
    })
}

//show
const show = (req, res) => {
    db.Company.findById(req.params.id, (error, foundCompany) => {
        if (error) {
            console.log('Error in Companies show:', error)
        

        if(!foundCompany) return res.json({
            message: 'There is no company with this ID in db'
        })

        return res.send('Incomplete company show controller function');
    }

        res.status(200).json({
            company: foundCompany
        });
    });
};

//create 
const create = (req,res) => {
    db.Company.create(req.body, (error,savedCompany) => {
        if (error) {
            console.log('Error in Company create:', error)
        }

        res.status(201).json({ company: savedCompany })
    })
}

//update 
const update = (req, res) => {
    db.Company.findByIdAndUpdate(req.params.id, {new: true}, (error, updatedCompany) => {
        if (error) {
            console.log('error in companies')

            return res.send('incomplete companies')
        }

        res.status(200).json({
            updatedCompany
        })
    })
}

//delete 
const destroy = (req, res) => {
    db.Company.findByIdAndDelete(req.params.id, (error, deletedCompany) => {
        if (error) {
            console.log('Error in companies destroy:', error)
            return res.send('incomplete company delete controller function')
        }

        res.status(200).json({
            deletedCompany
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