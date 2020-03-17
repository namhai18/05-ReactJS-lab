import * as ActionType from "./../constant/ActionType";

export const actDelete = (user) => {
    return {
        type: ActionType.DELETE,
        user: user
    };
}

export const actEdit = (user) => {
    return {
        type: ActionType.EDIT,
        user: user
    };
}

export const actSubmit = (user) => {
    return {
        type: ActionType.SUBMIT,
        user: user
    };
}

export const actSearch = (keyWord) => {
    return {
        type: ActionType.SEARCH,
        keyWord: keyWord
    };
}