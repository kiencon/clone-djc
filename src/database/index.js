import PouchDB from 'pouchdb';
import PouchDBAuthentication from 'pouchdb-authentication';

PouchDB.plugin(PouchDBAuthentication);
const dbName = 'cvzone';
const remoteURL = `https://1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix:9f0a3c639cf982ec03bf58fcf054f47e437d3485e209de080d7842b0006029fa@1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix.cloudantnosqldb.appdomain.cloud/${dbName}`;

const db = new PouchDB(remoteURL, { skip_setup: true });
const apiDB = {};

apiDB.login = async (username, password) => db.logIn(username, password).then(() => true).catch(() => false);

apiDB.saveJob = doc => db.post({
  ...doc,
  type: 'jobsheet',
  _id: `${doc.driverAndOwnerInfo.id}`,
  createdAt: new Date(),
});

apiDB.listJob = () => db.allDocs({
  include_docs: true,
});

apiDB.get = id => db.get(id);

apiDB.syncToServer = (database = dbName, keepAlive = true) => {
  if (!database) {
    throw new Error('Missing database');
  }

  return db.replicate.to(remoteURL, {
    live: keepAlive,
    retry: true,
    batches_limit: 10,
  });
};

export default apiDB;
