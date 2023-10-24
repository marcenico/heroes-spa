import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('Pruebas en <SearchPage />', () => {
  test('debe de mostrar el componente correctamente con valores por defecto', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar a batman y el input para buscar a batman', () => {
    const queryValue = 'batman';

    render(
      <MemoryRouter initialEntries={[`/search?q=${queryValue}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    const img = screen.getByRole('img');
    const alertDiv = screen.getByTestId('alert-danger');

    expect(input.value).toBe(queryValue);
    expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    expect(alertDiv.style.display).toBe('none');
  });
});
