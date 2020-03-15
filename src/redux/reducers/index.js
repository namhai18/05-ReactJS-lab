// import thư viện giúp combine Reducers
import {combineReducers} from "redux";
import userReducer from "./userReducer";

// Khởi tạo reducer cho project
const rootReducer = combineReducers({
    // key
    // value
    userReducer // userReducer:userReducer (key trùng value)
});

export default rootReducer;
