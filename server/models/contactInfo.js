const pool = require('../pool');

const INSERT_PRODUCT = `INSERT INTO "Contact_Info" ("business_name", "email_address", "address", "phone") VALUES($1, $2, $3, $4) ON CONFLICT (business_name) DO UPDATE SET business_name = EXCLUDED.business_name, email_address = EXCLUDED.email_address, address = EXCLUDED.address, phone = EXCLUDED.phone;`

// makes the query but if there's a conflict on business name, it will update
const contactModel = {
  insertContactInfo(contact){
    const contactValues = [contact.businessName, contact.email, contact.address, contact.phone];
    console.log(contactValues)
    return new Promise((resolve, reject) => {
      pool.query(INSERT_PRODUCT, contactValues, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      })
    })
  }
}

module.exports = contactModel;