const TEST = 'common/test';
const TEST2 = 'common/test2';

const gg = type => data => ({ type, data });
// const gl = type => () => ({ type });

const test = gg(TEST);


export {
  TEST,
  TEST2,
  test,
};
