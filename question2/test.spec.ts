import { assert } from 'chai';
import { findOutlier } from './main';



it('Simple tests', function() {
  assert.equal(findOutlier([0, 1, 2]), 1);
  assert.equal(findOutlier([1, 2, 3]), 2);
  assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
  assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
  assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
  assert.equal(findOutlier([2, 6, 8, 10, 3, 4, 8, 12, 22, 20, 100 ]), 3);
});
