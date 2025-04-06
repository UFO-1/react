import {makeArray} from 'shared-runtime';

function useHook({el1, el2}) {
  const s = new Set();
  const arr = makeArray(el1);
  s.add(arr);
  // Mutate after store
  arr.push(el2);

  s.add(makeArray(el2));
  return s.size;
}

export const FIXTURE_ENTRYPOINT = {
  fn: useHook,
  params: [{el1: 1, el2: 'foo'}],
  sequentialRenders: [
    {el1: 1, el2: 'foo'},
    {el1: 2, el2: 'foo'},
  ],
};
