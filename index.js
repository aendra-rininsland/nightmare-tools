/**
 * Async Tools for Nightmare.js
 * 2016 Ændrew Rininsland
 */

const { chunk } = require('lodash');

async function series(items, cb) {
  return await items.reduce(async (queue, item) => {
    const data = await queue;
    data.push(await cb(item));
    return dataArray;
  }, Promise.resolve([]));
}

async function parallel(items, cb) {
  return await Promise.all(items.map(async item => await cb(item)));
}

async function batch(items, concurrency = 5, cb) {
  const batches = _.chunk(items, concurrency);
  return await series(batches, item => parallel(item, cb));
}
