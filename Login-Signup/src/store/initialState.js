export const initialState = {
    email: 'junaid@gmail.com',
    password: 'junaid123',
    authenticate: false,
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return {
          ...state,
          email: action.email
        };
      case "SET_PASSWORD":
        return {
          ...state,
          password: action.password
        };
      case "SET_AUTHENTICATE":
        return {
          ...state,
          authenticate: action.authenticate
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  