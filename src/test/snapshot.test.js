import { render } from '@testing-library/react';
import Home from '../components/Home';
import Quote from '../components/quote';
import Calculator from '../components/Calculator';

describe('Snapshot Test for Math Magicians project', () => {
  it('Snapshot needs to be eaqual as component render', () => {
    const viewHome = render(<Home />);
    expect(viewHome).toMatchSnapshot();
  });
  it('Snapshot needs to be eaqual as component render', () => {
    const viewQuote = render(<Quote />);
    expect(viewQuote).toMatchSnapshot();
  });
  it('Snapshot needs to be eaqual as component render', () => {
    const calculatorView = render(<Calculator />);
    expect(calculatorView).toMatchSnapshot();
  });
});
