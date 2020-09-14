import { SharedUtil } from 'common';

describe('SharedUtil', () => {
  it('should return null', () => {
    expect(SharedUtil.getStatus('foo')).toBeNull();
    expect(null).toBeNull();
  });
});
