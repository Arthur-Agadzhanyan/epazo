import { useCallback } from "react";

export const useMessage = ()=>{
    return useCallback(text=>{
        if(window.M && text){
            window.M.toast({html: text})//M.toast это метод из библиотеки Materialize позволяющий выводить сообщения на экран
        }
    },[])
}