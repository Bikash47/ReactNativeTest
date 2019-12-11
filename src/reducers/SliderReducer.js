import {
    EMAIL_CHANGE, FETCHING_DATA, GETTING_JSON_RESPONSE, GETTING_MONITORED_STOP_VISIT_RESPONSE, ORIGIN_REF,
    PASSWORD_CHANGE
} from "../config/Config";

const INITIAL_STATE = {loading: false,email: '', password: '', resp: {},monitordData:[],originList:[]};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

       
        case FETCHING_DATA:
            return {...state, loading:action.payload };
        case ORIGIN_REF:
            debugger
            return {...state, originList: action.payload, loading: false}

        default:
            return state;
    }
}