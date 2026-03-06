import { useParams } from "react-router";
import { useAppSelector } from "../hooks/useAppSelector";
import { useMemo } from "react";
import { TextField, Button} from "@mui/material";

export default function BookDetail(){
    const {id} = useParams();
    const {bookList} = useAppSelector(b => b.book);

    const book = useMemo(() => {
        return bookList.find(book => book.id === id);
    }, [bookList, id])

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >   
                <img style={{width: "100px", height:"100px"}} src={book?.imageUrl}/>
                <h2 style={{ margin: 0 }}>{book?.judul}</h2>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                    {book?.kategori}
                </p>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                    {book?.deskripsi}
                </p>
                <TextField label="Peminjam" variant="outlined" sx={{
                                width: "100%",
                            }} onChange={(e) => {
                                { setPeminjam(e.target.value as number) }
                }} />
                <Button variant="contained" sx={{
                    marginBottom: 2,
                    width: "40%",
                    height: "40px",
                    boxShadow: 8,
                }}>Pinjamkan!</Button>
            </div>
        </div>
    )
}