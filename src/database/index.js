import PouchDB from 'pouchdb';

const dbName = 'd2TyreDB';
const db = new PouchDB(dbName);
const apiDB = {};

apiDB.login = (username, password) => {
  console.log(username, password);
  if (username === 'admin' && password === 'admin') {
    return true;
  }
  return false;
};

apiDB.saveJob = doc => db.post({
  ...doc,
  type: 'jobsheet',
  _id: `${doc.driverAndOwnerInfo.companyName}-${new Date().getTime()}`,
  createdAt: new Date(),
});

apiDB.listJob = () => db.allDocs({
  include_docs: true,
});

apiDB.get = id => db.query({
  type: 'jobsheet',
  _id: id,
});

export default apiDB;
