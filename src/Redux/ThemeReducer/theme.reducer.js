import { Change_Theme, THEME_DARK, THEME_LIGHT } from "./theme.actionType";

const initialState={
    theme:"green"
}

export const ThemeReducer=(state=initialState,{type,payload})=>{
switch(type){
    case Change_Theme :{
        return {...state,theme:payload}
    }
    default:{
        return state ;
    }
}
}