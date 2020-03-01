 const Test = (state = [1,2,3], action) => {
    switch (action.type) {
        case 'ADD_TEST': 
            return [
                ...state,
                action.payload,
            ];
        default: return state;
    }
}
export default Test;