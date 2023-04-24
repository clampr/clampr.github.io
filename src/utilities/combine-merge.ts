import deepmerge from 'deepmerge';

const combineMerge = (target: any[], source: any[], options: any) => {
  const destination = target.slice();

  source.forEach((item, index) => {
    if (typeof destination[index] === 'undefined') {
      destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
    } else if (options.isMergeableObject(item)) {
      destination[index] = deepmerge(target[index], item, options);
    } else if (target.indexOf(item) === -1) {
      destination[index] = item;
    }
  });
  return destination;
};

export default combineMerge;
