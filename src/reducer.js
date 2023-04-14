function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

let state = { count: 0 };

// reassining the state to the return value so as to persist our changes in state
function dispatch(action){
  state = changeState(state, action);
  // call the render function
  render();;
}

function render() {
  document.body.textContent = state.count;
}



console.log(dispatch({ type: "counter/increment" }))
// => {count: 1}
console.log(dispatch({ type: "counter/increment" }))
// => {count: 1}
console.log(dispatch({ type: "counter/increment" }))
// => {count: 1}
