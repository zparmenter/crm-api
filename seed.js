const db = require('./models');
const data = require('./companyData.json');

// Delete
db.Company.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  
  console.log(result.deletedCount,'companies deleted');

  // Create
  db.Company.create(data.companies, (err, seededCompanies) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    
    console.log(seededCompanies.length, 'companies created successfully');
    console.log('done!');

    process.exit();
  });
});