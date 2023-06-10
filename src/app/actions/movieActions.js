
//api isteği yaparken gönderilecek


import axios from 'axios';
import { ActionsTypes } from '../ActionTypes';

const options = {

    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjRiMGVhZDM1MjFkYjg3NTg5MDYyNjk3ZGViZGI3MSIsInN1YiI6IjY0N2UyMjQ3Y2NkZTA0MDEzNTViZmJhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QDlJEWjcojDXitX_M1yR-djFSqSgoKMGqDHRGJXYz3Q'
    },
};

//axiosun davranışını belirleme 
axios.defaults.baseURL = 'https://api.themoviedb.org/3';


export const getMovies = () => (dispatch) => {

    //asenkron işlemler yapıllıyor...
    //store aktarmadan yapılan işlemler

    axios.get("/movie/popular", options)
        .then((res) => dispatch({
            type: ActionsTypes.SET_MOVİES,
            payload: res.data.results,

        }));
    // dispatch({
    //     //reducera gönderme
    // });


    //biz getMovies çalıştığı anda çağrıldığı anda bu isteği yap ve options ile at kimliğin belli olsun
    // ardıdan gelen veri olumluysa bu
    // veriyi yakala ve console yaz 
    //artık bunu mainPage anasayfasında dispatch işemiyle çalıştırırlıyor bu sayfada çalıştıralım
};

//kısa versiyonunu kullnadık

export const getGenres = () => (dispatch) => {
    // kategori verisini çekme isteği
    axios
        .get('/genre/movie/list', options)
        // veriyi store'a aktar
        .then((res) =>
            dispatch({
                type: ActionsTypes.SET_GENRES,
                payload: res.data.genres,
            })
        );
};


//custom hook 
// bu fonksiyon şunu yapaması lazım ben bir url vericem bu axios gidecek istek atacak 
//axios sonucunda dönen veriyi fonksiyonun çağrıldığı yere gönderecek 
export const fetchByUrl = async (url) => {
    const res = await axios.get(url, options);
    return res.data
}