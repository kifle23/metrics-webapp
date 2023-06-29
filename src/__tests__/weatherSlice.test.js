import getCities from '../redux/weatherSlice';

describe('Cities Reducer', () => {
  it('returns the default state', () => {
    const fakeState = [];
    const fakeAction = { type: 'test' };
    const state = getCities(fakeState, fakeAction);
    expect(state).toEqual([]);
  });

  it('returns the given state', () => {
    const fakeState = ['New York', 'Chicago', 'Denver'];
    const fakeAction = { type: 'test' };
    const state = getCities(fakeState, fakeAction);
    expect(state).toEqual(['New York', 'Chicago', 'Denver']);
  });
});
