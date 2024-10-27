import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PButtonView from '../components/Button/PButton.view';
import { ButtonType } from '../components/Button/PButton.model';
describe('PButtonView Component', () => {
  test('renders with primary color and outlined variant', () => {
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Reset}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
   
  });

  test('renders as disabled', () => {
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Reset}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
        disabled
      >
        test
      </PButtonView>
    );
  });

  test('renders with different variants', () => {
    render(
      <PButtonView
        color="secondary"
        type={ButtonType.Button}
        variant="contained"
        size="large"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
   
  });

  test('handles hover state', () => {
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Button}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
    const button = screen.getByText('test');
    fireEvent.mouseOver(button);
  });

  test('handles focus state', () => {
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Button}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
    const button = screen.getByText('test');
    fireEvent.focus(button);
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Button}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
        onClick={handleClick}
      >
        Click me
      </PButtonView>
    );
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with correct accessibility attributes', () => {
    render(
      <PButtonView
        color="primary"
        type={ButtonType.Button}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
        aria-label="Primary action button"
      >
        Accessible Button
      </PButtonView>
    );
  });
});
