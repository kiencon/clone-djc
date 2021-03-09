/* eslint-disable no-undef */
import PouchDB from 'pouchdb';
import mockData from './mockData';

class Db {
  constructor() {
    this.dbName = 'cvzone';
    this.initLocalDB(this.dbName);
    this.remoteURL = `https://1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix:9f0a3c639cf982ec03bf58fcf054f47e437d3485e209de080d7842b0006029fa@1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix.cloudantnosqldb.appdomain.cloud/${this.dbName}`;
  }

  async saveJob(doc) {
    const createdAt = new Date();
    const isExistVehicle = await this.db.get(doc.vehicleInformation.vehicleRegistrationNumber);
    if (!isExistVehicle) {
      await this.db.post({
        _id: `${doc.vehicleInformation.vehicleRegistrationNumber}`,
        createdAt,
        type: 'vehicle',
      });
    }
    return this.db.post({
      ...doc,
      type: 'jobsheet',
      _id: `${doc.driverAndOwnerInfo.id}`,
      createdAt,
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

  async update(doc) {
    return this.db.put({
      type: 'jobsheet',
      createdAt: new Date(),
      ...doc,
    });
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
      selector: {
        type: {
          $exists: true,
        },
      },
    });
  }

  initLocalDB(database) {
    this.db = new PouchDB(database, {
      skip_setup: true,
      auto_compaction: true,
    });
  }

  initViewVehicle() {
    const view = {
      _id: '_design/vehicle',
      views: {
        vehicle: {
          map: function (doc) {
            if (doc.type === 'vehicle') {
              // eslint-disable-next-line no-undef
              emit(doc.vehicleInformation.vehicleRegistrationNumber, null);
            }
          }.toString(),
        },
      },
    };

    // save it
    this.db.put(view).then(() => {
      console.log('init vehicle succsess');
    }).catch(err => {
      // some error (maybe a 409, because it already exists?)
      console.log(err);
    });
  }

  async searchVehicleNumber(startkey, limit = 20, include_docs = true) {
    const endkey = `${startkey}\uffff`;
    const res = await this.db.query('vehicle/vehicle',
      {
        startkey, endkey, limit, include_docs,
      }).then(docs => {
      const data = [];
      for (let i = 0; i < docs.rows.length; i += 1) {
        data.push(docs.rows[i].doc);
      }
      return docs;
    })
      .catch(err => {
        console.log(err);
      });
    return res;
  }
}
const apiDB = new Db();
export default apiDB;
