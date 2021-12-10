const db = require('./models');
const data = require('./auditData.json');

//Delete
db.Audit.deleteMany({}, (err, result) => {
    if(err) {
        console.log(err);
        process.exit();
    }

    console.log(result.deletedCount, 'audits deleted');

    //Create
    db.Audit.create(data.audits, (err, seededAudits) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log(seededAudits.length, 'audits created successfully');
        console.log('done!');

        process.exit();
    });
});