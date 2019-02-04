const hooks = () => {
  let buckets = {};
  let currentBuckets = [];

  let setCurrentBuckets = bucket => currentBuckets.push(bucket);
  let getCurrentBucket = () => currentBuckets;

  let statefulFunction = () => {};

  let useState = () => {};

  return [getCurrentBucket, setCurrentBuckets];
};

module.exports = hooks;
