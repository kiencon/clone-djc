/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import PouchDB from 'pouchdb';

class Db {
  constructor() {
    this.dbName = 'cvzone';
    this.initLocalDB(this.dbName);
    this.remoteURL = `https://1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix:9f0a3c639cf982ec03bf58fcf054f47e437d3485e209de080d7842b0006029fa@1f8f1b10-c761-4916-b583-41bd83e6a4ed-bluemix.cloudantnosqldb.appdomain.cloud/${this.dbName}`;
  }

  saveJob(doc) {
    const createdAt = new Date();
    const cloneDoc = {
      ...doc,
      type: 'jobsheet',
      vehicleId: doc.vehicleInformation.vehicleRegistrationNumber,
      companyId: doc.driverAndOwnerInfo.companyName,
      createdAt,
      _id: `${doc.driverAndOwnerInfo.id}`,
    };

    const {
      vehicleInformation,
      driverAndOwnerInfo,
    } = cloneDoc;

    return Promise.all([
      this.db.post(cloneDoc),
      this.saveVehicle(vehicleInformation, createdAt),
      this.saveCompany(driverAndOwnerInfo, createdAt),
    ]);
  }

  async saveVehicle(doc, createdAt) {
    const cloneDoc = {
      ...doc,
      createdAt,
      _id: doc.vehicleRegistrationNumber,
      type: 'vehicle',
      updatedAt: new Date().toISOString(),
    };
    return this.saveDoc(cloneDoc);
  }

  saveDoc(doc) {
    if (doc._rev) {
      this.db.put(doc);
    } else {
      this.db.post(doc);
    }
  }

  async saveCompany(doc, createdAt) {
    const cloneDoc = {
      ...doc,
      createdAt,
      _id: doc.companyName,
      type: 'companyInfo',
      updatedAt: new Date().toISOString(),
    };
    return this.saveDoc(cloneDoc);
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
              emit(doc._id, null);
            }
          }.toString(),
        },
      },
    };

    // save it
    this.db.put(view).then(() => {
      console.log('init vehicle view succsess');
    }).catch(err => {
      // some error (maybe a 409, because it already exists?)
      console.log(err);
    });
  }

  initViewCompanyInfo() {
    const view = {
      _id: '_design/companyInfo',
      views: {
        companyInfo: {
          map: function (doc) {
            if (doc.type === 'companyInfo') {
              emit(doc._id, null);
            }
          }.toString(),
        },
      },
    };

    // save it
    this.db.put(view).then(() => {
      console.log('init companyInfo view succsess');
    }).catch(err => {
      // some error (maybe a 409, because it already exists?)
      console.log(err);
    });
  }

  async initView() {
    await this.initViewVehicle();
    await this.initViewCompanyInfo();
  }

  searchVehicleNumber(startkey, limit = 20, include_docs = true) {
    return this.searchByView('vehicle/vehicle', startkey.toUpperCase(), limit, include_docs);
  }

  searchCompanyInfo(startkey, limit = 20, include_docs = true) {
    return this.searchByView('companyInfo/companyInfo', startkey.toUpperCase(), limit, include_docs);
  }

  async searchByView(viewName, startkey, limit, include_docs) {
    const endkey = `${startkey}\uffff`;
    const res = await this.db.query(viewName,
      {
        startkey, endkey, limit, include_docs,
      }).then(docs => {
      console.log('searchByView', docs);
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
