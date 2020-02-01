const INITIAL_STATE = {
    monsters: []
  };
  
  const monsterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_MONSTERS':
        return {
          ...state,
          monsters: action.payload
        };
      default:
        return state;
    }
  };
  
  export default monsterReducer;