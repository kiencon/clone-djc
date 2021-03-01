import PouchDB from 'pouchdb';
import PouchDBAuthentication from 'pouchdb-authentication';

PouchDB.plugin(PouchDBAuthentication);

const dbName = 'cvzone';
const remoteURL = `https://1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix:9f0a3c639cf982ec03bf58fcf054f47e437d3485e209de080d7842b0006029fa@1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix.cloudantnosqldb.appdomain.cloud/${dbName}`;
const remoteDB = new PouchDB(remoteURL, {
  skip_setup: true,
});

export const login = async (username, password) => remoteDB.logIn(username, password).then(res => {
  console.log(res);
  return res;
}).catch(err => {
  console.log(err);
  throw err;
});
