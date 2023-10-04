import { authReducer, types } from '../../../auth';

describe('Pruebas en authReducer', () => {
  const initialState = {
    logged: false,
    user: null
  };

  test('debe de regresar el estado por defecto', () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test('debe de (login) autenticar y establecer el usuario', () => {
    const action = { type: types.login, payload: { id: '123', name: 'Juan' } };

    const state = authReducer(initialState, action);

    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test('debe de (logout) borrar el name y logged en false', () => {
    const loggedState = { logged: true, user: { id: '123', name: 'Juan' } };
    const action = { type: types.logout };

    const state = authReducer(loggedState, action);

    expect(state).toEqual({ logged: false });
  });
});
