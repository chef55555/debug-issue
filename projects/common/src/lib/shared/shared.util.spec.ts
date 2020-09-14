import {SharedUtil} from './shared.util';

describe('SharedUtil', () => {
  it('should return null', () => {
    expect(SharedUtil.getStatus('foo')).toBeNull();
  });
});

