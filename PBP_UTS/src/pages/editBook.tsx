import { useBook } from "../hooks/useBook";
import { useParams, useNavigate } from "react-router";
import { useEditBook } from "../hooks/useEditBook";
import { useEffect, useState } from "react";
import {FormControl, FormLabel, FormControlLabel, RadioGroup, TextField, Radio, Button} from "@mui/material";

export default function editBook(){
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [tahun, setTahun] = useState(0);
    const [kategori, setKategori] = useState("");
    const {bookList} = useBook();
     const navigate = useNavigate();
    const { id } = useParams();
    const editBook = useEditBook();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(()=>{
        const thisBook = bookList.find(book => book.id === id);
        if (!thisBook) return;

        setJudul(thisBook.judul ?? "");
        setDeskripsi(thisBook.deskripsi ?? "");
        setTahun(thisBook.tahun ?? 0);
        setKategori(thisBook.kategori ?? "");
    })

    const edit = async () => {
        if (!id || !judul || !deskripsi || !tahun || !kategori) {
            return;
        }

        if (await editBook({id, judul, deskripsi, tahun, kategori})) {
                navigate("/menu/" + id);
        }
    }

    return <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: "1000px",
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >   
            <h1>Edit Buku</h1>
            <br/>
                <TextField label="Judul" variant="outlined" value={judul}
                    sx={{
                        width: "100%",
                    }}
                    onChange={(e) => {
                        { setJudul(e.target.value) }
                    }}
                />
                <TextField label="Deskripsi" variant="outlined" value={deskripsi}
                    sx={{
                        width: "100%",
                    }}
                    onChange={(e) => {
                        { setDeskripsi(e.target.value) }
                    }}
                />
                <TextField type="number" label="Tahun" variant="outlined" value={tahun}
                    sx={{
                        width: "100%",
                    }}
                    onChange={(e) => {
                        {setTahun(parseInt(e.target.value)) }
                    }}
                />
                <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={kategori}
                    onChange={(e) => {
                        { setKategori(e.target.value) }
                    }}
                >
                    <FormControlLabel value="komik" control={<Radio />} label="Komik" />
                    <FormControlLabel value="majalah" control={<Radio />} label="Majalah" />
                    <FormControlLabel value="novel" control={<Radio />} label="Novel" />
                </RadioGroup>
                </FormControl>
                <Button variant="contained" sx={{
                    marginBottom: 2,
                    width: "100%",
                    height: "40px",
                    boxShadow: 8,
                }} onClick={edit}>Save!</Button>
            </div>    
        </div>
}