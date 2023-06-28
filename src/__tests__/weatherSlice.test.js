import getCities from '../redux/weatherSlice';

describe('Cities Reducer', () => {
  it('Verify that the reducer returns the default state', () => {
    const mockState = [];
    const mockAction = { type: 'test' };
    const state = getCities(mockState, mockAction);
    expect(state).toEqual([]);
  });

  it('Verify that the reducer returns the given state', () => {
    const mockState = ['New York', 'Chicago', 'Denver'];
    const mockAction = { type: 'test' };
    const state = getCities(mockState, mockAction);
    expect(state).toEqual(['New York', 'Chicago', 'Denver']);
  });
});
