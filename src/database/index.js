import PouchDB from 'pouchdb';
import mockData from './mockData';

class Db {
  constructor() {
    this.dbName = 'cvzone';
    this.initLocalDB(this.dbName);
    this.remoteURL = `https://1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix:9f0a3c639cf982ec03bf58fcf054f47e437d3485e209de080d7842b0006029fa@1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix.cloudantnosqldb.appdomain.cloud/${this.dbName}`;
  }

  saveJob(doc) {
    return this.db.post({
      ...doc,
      type: 'jobsheet',
      _id: `${doc.driverAndOwnerInfo.id}`,
      createdAt: new Date(),
    });
  }

  listJob() {
    return this.db.allDocs({
      include_docs: true,
    });
  }

  get(id) {
    return this.db.get(id);
  }

  remove(doc) {
    return this.db.remove(doc);
  }

  update(doc) {
    return this.db.update(doc);
  }

  async mockData() {
    for (let i = 0; i < mockData.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await this.saveJob(mockData[i]);
    }
  }

  startSyncFirstTime(keepAlive) {
    return this.db.sync(this.remoteURL, {
      live: keepAlive,
      retry: true,
      batches_limit: 10,
    });
  }

  initLocalDB(database) {
    this.db = new PouchDB(database, {
      skip_setup: true,
      auto_compaction: true,
    });
  }
}
const apiDB = new Db();
export default apiDB;
