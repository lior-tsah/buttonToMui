// PButtonView.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PButtonView from '../components/Button/PButton.view';
import { ButtonType } from '../components/Button/PButton.model';

describe('PButtonView Component', () => {
  test('renders with primary color and outlined variant', () => {
    render(
      <PButtonView
        buttonRef={null}
        color="primary"
        type={ButtonType.Reset}
        variant="outlined"
        size="medium"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
    const button = screen.getByText('test');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('outlined');
  });

  test('renders as disabled', () => {
    render(
      <PButtonView
        buttonRef={null}
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
    const button = screen.getByText('test');
    expect(button).toBeDisabled();
  });

  test('renders with different variants', () => {
    render(
      <PButtonView
        buttonRef={null}
        color="secondary"
        type={ButtonType.Button}
        variant="contained"
        size="large"
        to="http://localhost:5173/"
      >
        test
      </PButtonView>
    );
    const button = screen.getByText('test');
    expect(button).toHaveClass('secondary');
    expect(button).toHaveClass('contained');
  });

  test('handles hover state', () => {
    render(
      <PButtonView
        buttonRef={null}
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
    // בדוק אם מחלקת ה-hover קיימת, במידת הצורך
    // אם ה-className לא מתווסף אוטומטית, ייתכן שתצטרך להתאים את הקומפוננטה
    expect(button).toHaveClass('hover');
  });

  test('handles focus state', () => {
    render(
      <PButtonView
        buttonRef={null}
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
    expect(button).toHaveClass('focus');
  });
});
