"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_config_1 = require("./api.config");
const getRestuarants = async () => {
    try {
        const response = await api_config_1.axiosInstance.get('restaurants_list');
        return { ...response };
    }
    catch (error) {
        return { error, data: null };
    }
};
const getRestuarantsTamp = async () => {
    try {
        const response = await api_config_1.axiosInstance.get();
        return { ...response };
    }
    catch (error) {
        return { error, data: null };
    }
};
exports.default = { getRestuarants, getRestuarantsTamp };
//# sourceMappingURL=restaurant.api.js.map