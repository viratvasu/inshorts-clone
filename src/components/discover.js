import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsBox from './newsBoxes';
import '../styles/discover.css';
const Discover = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get(`http://api.mediastack.com/v1/news?access_key=8495115e47e3ef1069c04f7d1a767f81&countries=in&languages=en&categories=${'general'}&limit=100`)
            .then((resp) => {
                setData(resp.data.data)
            })
            .catch((errors) => {
                console.log(errors);
            })
    }, [])
    const renderData = () => {

        return <NewsBox data={data} />
    }
    const changeStatus = (type, e) => {
        const classesWithTopic = document.getElementsByClassName('topic')
        for (let i = 0; i < classesWithTopic.length; i++) {
            if (classesWithTopic[i].classList.contains("active")) {
                classesWithTopic[i].classList.remove("active")
            }
        }
        e.currentTarget.classList.add('active')
        axios.get(`http://api.mediastack.com/v1/news?access_key=8495115e47e3ef1069c04f7d1a767f81&countries=in&languages=en&categories=${type}&limit=100`)
            .then((resp) => {
                setData(resp.data.data)
            })
            .catch((errors) => {
                console.log(errors);
            })
    }
    return (
        <div className="container" style={{ 'margin': '20px 0' }}>
            <h2>Discover The News</h2>
            <div className="topics-container-container">
                <div className="topics-container">
                    <span className="topic active" onClick={(e) => changeStatus('general', e)}>general</span>
                    <span className="topic" onClick={(e) => changeStatus('business', e)}>business</span>
                    <span className="topic" onClick={(e) => changeStatus('entertainment', e)}>entertainment</span>
                    <span className="topic" onClick={(e) => changeStatus('health', e)}>health</span>
                    <span className="topic" onClick={(e) => changeStatus('science', e)}>science</span>
                    <span className="topic" onClick={(e) => changeStatus('sports', e)}>sports</span>
                    <span className="topic" onClick={(e) => changeStatus('technology', e)}>technology </span>
                </div>
            </div>
            {data !== '' ? renderData() : null}
        </div>
    );
}

export default Discover;