import * as api from '../api';
import {SIGN_IN, SIGN_UP} from '../constants/actionTypes';

export const signIn=(formData, history)=>async(dispatch) =>{
    try{
        const {data}=await api.signIn(formData);
        dispatch({type: SIGN_IN, payLoad:data});

        history.push('/');
    
    }catch(error){
        console.log(error.message);
    }
}


export const signUp=(formData, history)=>async(dispatch) =>{
    try{
        const {data}=await api.signUp(formData);
        dispatch({type: SIGN_UP, payLoad:data});
        history.push('/');
    }catch(error){
        console.log(error.message);
    }
}

