import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Teller';

test('Teller komponenten øker og minsker telleren sånn den skal', () => {
  const { getByText } = render(<Teller />);
  const countElement = getByText('Count: 0');
  const incrementButton = getByText('Increment');
  const decrementButton = getByText('Decrement');

  // Sjekker om telleren starter på null
  expect(countElement).toHaveTextContent('Count: 0');

  // Øker telleren
  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('Count: 1');

  // Minsker telleren
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('Count: 0');

  // Forsikrer oss om at telleren ikke går under 0
  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('Count: 0');

});
