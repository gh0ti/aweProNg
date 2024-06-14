import { TimestampToDatePipe } from './timestamp-to-time.pipe';

describe('TimestampToTimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimestampToDatePipe();
    expect(pipe).toBeTruthy();
  });
});
