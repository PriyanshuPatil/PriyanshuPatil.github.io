import { THEME_DARK, THEME_LIGHT } from "./theme.actionType"

export const apply_dark_theme=()=>{
return {type:THEME_DARK}
}

export const apply_light_theme=()=>{
return {type:THEME_LIGHT}
}