export default {
  getRecords: (table) => {
    let records = [];

    return new Promise((resolve, reject) => {
      if (records.length > 0) {
        resolve(records);
      }

      const processPage = (partialRecords, fetchNextPage) => {
        records = [...records, ...partialRecords];
        fetchNextPage();
      };

      const processRecords = (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(records);
      };

      table.select().eachPage(processPage, processRecords);
    });
  },
  getRecord: (table, itemID) => (
    new Promise((resolve, reject) => {
      const processRecord = (err, record) => {
        if (err) {
          reject(err);
          return;
        }

        const id = { id: record.id };
        const item = { ...id, ...record.fields };

        resolve(item);
      };

      table.find(itemID, processRecord);
    })
  ),
};
