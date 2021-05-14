import { useState } from 'react';
import axios from 'axios';
import '../styles/search.css';
import NewsBoxes from './newsBoxes';
const Search = () => {
    const [data, setData] = useState('')
    const doSearch = () => {
        const inputElement = document.getElementById("input")
        if (inputElement.value === "" || !inputElement.value) {
            inputElement.focus()
            document.getElementById("error").innerHTML = "You should fill to search"
        }
        else {
            axios.get(`http://api.mediastack.com/v1/news?access_key=8495115e47e3ef1069c04f7d1a767f81&countries=in&languages=en&keywords=${inputElement.value}&limit=100`)
                .then((resp) => {
                    // console.log(resp.data.data)
                    setData(resp.data.data)
                })
                .catch((errors) => {
                    console.log(errors);
                })
        }
    }
    const renderData = () => {
        if (data.length === 0) {
            return <p style={{ 'marginTop': '10px', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No News Found</p>
        }
        return <NewsBoxes data={data} />
    }
    return (
        <div className="container" style={{ 'margin': '20px 0' }}>
            <div className="input-container">
                <input placeholder="search" id="input" />
                <button onClick={() => doSearch()}>Search</button>
            </div>
            <p id="error" style={{ 'color': 'red', 'textAlign': 'center' }}></p>
            {data !== '' ? renderData() : null}
        </div>
    );
}

export default Search;