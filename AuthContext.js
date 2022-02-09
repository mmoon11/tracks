import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        // make api request to sign up with that email and password
        // if we sign up, modify our state, and say we are authenticated
        // if signing up fails, we probably need to reflect an error message somewhere
        try {
            // post is post request; sending to signup route
            // sending along email and password too
            const response = await trackerApi.post('/signup', {email, password});
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };
};

const signin = (dispatch) => {
    return ({email,password}) => {
        // try to signin

        //handle success by updating state

        // handle failure by showing error message 
    };
};

const signout = (dispatch) => {
    return () => {
        // sign out
    }
}

// this means Provider and Context are coming FROM createDataContext
// authReducer, list of actions, and initial state are passed through
export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedIn: false}
)