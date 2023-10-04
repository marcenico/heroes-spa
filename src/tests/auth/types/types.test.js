import { types } from '../../../auth';

describe('Pruebas en types', () => {
  test('debe de regresar estos types', () => {
    const typesToReturn = {
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    };

    expect(types).toEqual(typesToReturn);
  });
});
