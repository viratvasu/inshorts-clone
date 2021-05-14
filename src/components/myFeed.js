import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsBoxes from './newsBoxes';
import '../styles/myfeed.css'
const MyFeed = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get(`http://api.mediastack.com/v1/news?access_key=8495115e47e3ef1069c04f7d1a767f81&countries=${window.localStorage.getItem('country')}&languages=${window.localStorage.getItem('lauguage')}&categories=${window.localStorage.getItem("categories")}&limit=100`)
            .then((resp) => {
                // console.log(resp.data.data)
                setData(resp.data.data)
            })
            .catch((errors) => {
                console.log(errors);
            })
    }, [])
    const renderData = () => {
        if (data.length === 0) {
            return <p style={{ 'marginTop': '10px', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No News Found</p>
        }
        else {
            return <NewsBoxes data={data} />
        }
    }
    return (
        <div style={{ 'margin': '20px 0px' }}>
            {data === '' ? <div style={{ 'color': '#e84545' }}>Loading...</div> : <div className="container">
                <h2>Your Feed </h2>
                {renderData()}
            </div>}
        </div>
    );
}

export default MyFeed;