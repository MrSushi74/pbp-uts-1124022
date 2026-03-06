export type book = {
    id : string,
    judul: string,
    deskripsi: string,
    tahun: number,
    kategori: string,
    status: string,
    peminjam: string,
    imageUrl: string,
    createdAt: string,
    updatedAt: string
}

export type EditBookPayload = {
    id: string,
    judul: string,
    deskripsi: string,
    tahun: number,
    kategori: string
}



export type AsyncDataState = 'pending' | 'error' | 'loading' | 'fulfilled';
