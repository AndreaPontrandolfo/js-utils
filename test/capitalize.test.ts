import { capitalize } from '../src/capitalize';

it('makes the first letter capitalized', () => {
  expect(capitalize('letter')).toEqual('Letter');
});
