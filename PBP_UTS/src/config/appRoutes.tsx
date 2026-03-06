import { Routes, Route} from "react-router";
import { lazy } from "react";

const BookList = lazy(() => import('../pages/bookList.tsx'));
const BookByID = lazy(() => import('../pages/bookByID.tsx'));
const EditBook = lazy(() => import('../pages/editBook.tsx'));

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/books" element={<BookList/>}/>
            <Route path="/books/:id" element={<BookByID/>}/>
            <Route path="/edit-book/:id" element={<EditBook/>}/>
        </Routes>
    );
}