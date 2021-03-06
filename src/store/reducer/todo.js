import { TODOADD, REMOVEITEMS } from "./../action/actionType";

const initialState = {
  todoItems: []
};

const todo = (state = initialState, action) => {
  //   alert(action.type);
  switch (action.type) {
    case TODOADD:
      return {
        ...state,
        todoItems: [action.item, ...state.todoItems]
      };
    case REMOVEITEMS:
      return {
        ...state,
        todoItems: state.todoItems.filter((x, i) => i !== action.index)
      };
  }
  return {
    ...state
  };
};

export default todo;
