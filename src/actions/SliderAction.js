import {
    EMAIL_CHANGE, GETTING_JSON_RESPONSE, PASSWORD_CHANGE, GETTING_MONITORED_STOP_VISIT_RESPONSE,
    FETCHING_DATA, ORIGIN_REF
} from "../config/Config";

import ApiAccess from "../apiAccess/ApiAccess";
import {makeList} from "../business/LoginBusiness";





export const sampleApiCall = ({}) => {
    debugger;
    return async (dispatch) => {
        dispatch({type: FETCHING_DATA,payload:true});
        try {
            debugger
            let data = await ApiAccess.getWith_Headers("list"); //get('sm');//
            // console.log(" Response " + " " + data);
            dispatch({
                type: ORIGIN_REF,
                payload: data
            });
            dispatch({type: FETCHING_DATA,payload:false});

        }catch (e){
        }
    }
}
export const onRfrshCall = (data) => {
    debugger;
    return async (dispatch) => {
        dispatch({type: FETCHING_DATA,payload:true});
        try {
           
            // console.log(" Response " + " " + data);
            dispatch({
                type: ORIGIN_REF,
                payload: data[Math.floor(Math.random()*data.length)]//makeList(data)
            });
            dispatch({type: FETCHING_DATA,payload:false});

        }catch (e){
        }
    }
}




