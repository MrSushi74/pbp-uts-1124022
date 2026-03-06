import { useBook } from "./useBook";
import { useCallback } from "react";
import type { AddPeminjamPayload } from "../types";

export function useAddPeminjam(){
    
    return useCallback(async (payload: AddPeminjamPayload) => {
        const {reload} = useBook();
        const response = await fetch("http://localhost:5173/api/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                data:{
                    peminjam : payload.peminjam,
                }
            }),
        })

        const data = await response.json();
        if (response.status !== 200) {
            alert("Failed to create menu: " + data.message);
            return false;
        }
        reload();
        return true;
    }, [])
}