import * as ActionType from "./../constant/ActionType";

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "Nguyen Dinh Phuc",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    userEdit: null,
    keyWork: ""
}


const userReducer = (state = initialState, action) => {
    // type - check type của action truyền lên Reducer 
    switch (action.type) {
        case ActionType.DELETE:
            let index = state.userList.findIndex(item => {
                return item.id === action.user.id;
            })
            if (index !== -1) {
                let userListUpdate = [...state.userList];
                userListUpdate.splice(index, 1);
                state.userList = userListUpdate;
            }
            console.log(action);
            return { ...state };
        case ActionType.SUBMIT:
            debugger;
            if (action.user.id) {
                let index = state.userList.findIndex(item => {
                    return item.id === action.user.id;
                });
                if (index !== -1) {
                    let userListUpdate = [...state.userList];
                    userListUpdate[index] = action.user;
                    state.userList = userListUpdate;
                }
            } else {
                let userAdd = { ...action.user };
                userAdd.id = Math.random();
                state.userList = [...state.userList, userAdd];
                console.log(action);
            }
            return { ...state };
        case ActionType.EDIT:
            // let index = this.timViTri(user.id);
            // console.log("Vi tri : " + index);
            // let userList = [...state.userList];
            // userList.splice(index, 1);
            debugger;
            state.userEdit = action.user;
            console.log(action);
            return { ...state };
        case ActionType.SEARCH:
            console.log(action);
            state.keyWork = action.keyWord;
            // console.log(action);
            return { ...state };
        // Return về state mới
        default:
            return { ...state };
    }
};

export default userReducer;