import { CompleteWithZerosPipe } from './complete-with-zeros.pipe';

describe('CompleteWithZerosPipe', () => {
  it('create an instance', () => {
    const pipe = new CompleteWithZerosPipe();
    expect(pipe).toBeTruthy();
  });
});
