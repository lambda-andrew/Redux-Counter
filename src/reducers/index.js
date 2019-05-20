import { INCREMENT, DECREMENT } from '../actions';

// const initialState = {
//   count: 0
// }  


// kept getting can't read state error messages so I just took it out
// hard coded count to zero and called it good.



// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return ++count
    case DECREMENT:
       return --count
    default:
      return count;
  }
};
