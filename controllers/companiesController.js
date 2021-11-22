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


module.exports = {
    index,
    show,
};