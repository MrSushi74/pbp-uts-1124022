import { useCallback, useMemo } from "react";
import { bookActions } from "../store/bookSlice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";


export function useBook(){
    const dispatch = useAppDispatch();
    const {bookList, bookState} = useAppSelector((state) => state.book);

    const reload = useCallback(async () => {
        dispatch(bookActions.setBookState("loading"));
        try{
            const response = await fetch("http://localhost:5173/api/buku", {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            if(!response.ok){
                throw new Error("Failed to fetch books");
            }
            const data = await response.json();
            dispatch(bookActions.setBook(data.data));
            dispatch(bookActions.setBookState("fulfilled"));
        } catch{
            dispatch(bookActions.setBookState("error"));
        }
    },[])

    return useMemo(()=>{
        return {bookList, bookState, reload};
    },[bookList,bookState,reload])
}