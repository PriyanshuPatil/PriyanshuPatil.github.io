import { THEME_DARK, THEME_LIGHT } from "./theme.actionType";

const initialState={
    theme:"#7e6df6"
}

export const ThemeReducer=(state=initialState,{type})=>{
switch(type){
    case THEME_DARK :{
        return {...state,theme:"dark"}
    }
    case THEME_LIGHT :{
        return {...state,theme:"light"}
    }
    default:{
        return state ;
    }
}
}