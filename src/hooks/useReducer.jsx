const newState = (state, action) => {
    let inputV = parseInt(document.getElementById("input").value);
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
      case "setInput":
        return { count: inputV };
      default:
        return state.count;
    }
  };

export default newState;
