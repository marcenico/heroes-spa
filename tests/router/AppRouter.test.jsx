import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter />', () => {
  test('debe de mostrar el login si no esta autenticado', () => {
    const contextValue = { logged: false };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText('Login')).toBeTruthy();
  });

  test('debe de mostrar el componente de Marvel si esta autenticado', () => {
    const contextValue = { logged: true, user: { id: '123', name: 'Juan' } };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { name: 'Marvel' });

    expect(heading).toBeTruthy();
  });
});
