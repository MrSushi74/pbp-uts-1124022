import { useBook } from "./useBook";
import { useCallback } from "react";
import type { EditBookPayload } from "../types";

export function useEditBook(){
    const {reload} = useBook();
    return useCallback(async (payload: EditBookPayload) => {
        try {
            const response = await fetch("http://localhost:5173/api/buku/" + payload.id, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    data:{
                        judul : payload.judul,
                        deskripsi : payload.deskripsi,
                        tahun : payload.tahun,
                        kategori : payload.kategori
                    } 
                }),
            })

            const data = await response.json();
            if (response.status !== 200) {
                throw new Error("Failed to edit menu: " + data.message);
            }
            reload();
            return true;
        } catch {
            return false;
        }
    }, [])
}