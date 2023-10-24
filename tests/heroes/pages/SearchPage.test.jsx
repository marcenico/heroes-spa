import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => {
  beforeEach(() => jest.clearAllMocks());

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

  test('debe de mostrar un error si no se encuentra el hero (batman123)', () => {
    const queryValue = 'batman123';

    render(
      <MemoryRouter initialEntries={[`/search?q=${queryValue}`]}>
        <SearchPage />
      </MemoryRouter>
    );

    const alertDiv = screen.getByTestId('alert-danger');

    expect(alertDiv.style.display).toBe('');
  });

  test('debe de llamar el navigate a la pagina nueva', () => {
    const inputValue = 'superman';

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    const form = screen.getByTestId('form');

    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });
    fireEvent.submit(form);

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
