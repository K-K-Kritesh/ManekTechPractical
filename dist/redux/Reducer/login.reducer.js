"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions_1 = require("../../Actions");
const initialState = {
    Login: true,
    AllData: [],
};
const PracticalProject = (state = initialState, action) => {
    switch (action.type) {
        case Actions_1.ACTION_TYPES.RESTAURANT.LOGIN:
            return { ...state, Login: action.payload };
        case Actions_1.ACTION_TYPES.RESTAURANT.RESTAURANT_LIST:
            return { ...state, AllData: action.payload };
        default:
            return state;
    }
};
exports.default = PracticalProject;
//# sourceMappingURL=login.reducer.js.map