import { useNavigate } from "react-router"
import { useBook } from "../hooks/useBook";
import { useEffect } from "react";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Icon, MenuList, styled } from "@mui/material";
import { useMemo } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';




export default function bookList(){
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(2),
    }));

    const navigate = useNavigate();
    const {reload, bookList : books, bookState} = useBook();
    useEffect(() => {
        if (bookState !== 'fulfilled') {
            reload();
        }
    }, [])
    
    const goToDetails = (id: string) => {
        navigate(`/books/${id}`);
    };

    const goToEdit = (id: string) => {
        navigate(`/edit-book/${id}`)
    }


    return<><div
            style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                padding: "2rem",
            }}
        >
            <h1 style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
            }}
            >Post List</h1>
        </div>
            <div
                style={{
                    display: "flex",
                    marginTop: "20px",
                    backgroundColor: "white",
                }}
            >
                <Box sx={{width: "100%", minHeight: "100vh", padding: 2}}>
                    <Masonry columns={4} spacing={2}>
                        {books.map((book) => (
                            <Item key={book.id} style={{backgroundColor: "white", borderColor: "darkgray"}}>
                                <h3 style={{ width: 100 }}>{book.judul}</h3>
                                <p>{book.kategori}</p>
                                <p>{book.deskripsi}</p>
                                <img style={{ width: 100 }} src={String(book.imageUrl)}/>
                                <br></br>
                                <RemoveRedEyeIcon onClick={() => goToDetails(book.id)}></RemoveRedEyeIcon>
                                <EditIcon onClick={() => goToEdit(book.id)}></EditIcon>
                            </Item>
                        ))}
                    </Masonry>
                </Box>
            </div>    
        </>                
}