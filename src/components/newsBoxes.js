import '../styles/newsBoxes.css';
const NewsBoxes = (props) => {
    let isRenderd = false
    return (
        <div className="box-container">
            {props.data.length === 0 ? <p style={{ 'marginTop': '10px', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No News Found</p> : props.data.map(dataItem => {
                if (!dataItem.image) {
                    return null
                }
                else {
                    isRenderd = true
                }
                return (
                    <div className="news-box" key={dataItem.title}>
                        <div className="image-container">
                            <img src={dataItem.image} alt="news img" />
                        </div>
                        <div className="news-content">
                            <div className="news-main">
                                <div className="title">{dataItem.title}</div>
                                <div className="description">{dataItem.description}</div>
                            </div>
                            <div className="box-link">
                                <div className="full-article-container"> <center><a href={dataItem.url} rel="noreferrer noopener" target="_blank">Full Article</a></center></div>
                                <div className="news-info">
                                    <span className="category">{dataItem.category}</span>
                                    <span className="date">{dataItem.published_at.substring(0, 10)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bookmark" style={{ 'cursor': 'pointer' }} onClick={(e) => {
                            if (window.localStorage.getItem("bookmarks")) {
                                let bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"))
                                bookmarks.push(dataItem)
                                window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
                                e.currentTarget.classList.add("added")
                            }
                            else {
                                let bookmarks = []
                                bookmarks.push(dataItem)
                                window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
                            }
                            // console.log(window.localStorage.setItem("bookmarks", "a"))
                            e.currentTarget.classList.add('added')
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.333 512">
                                <path id="Path_2" data-name="Path 2" d="M416.667,0H95.334a15,15,0,0,0-15,15V497a15,15,0,0,0,25.606,10.606L256,357.544,406.06,507.606A15,15,0,0,0,431.667,497V15A15,15,0,0,0,416.667,0Z" transform="translate(-80.334)" />
                            </svg>
                        </div>
                    </div>
                )
            })}
            {isRenderd ? null : <p style={{ 'marginTop': '15px', 'fontSize': '1.1rem', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No News Found</p>}
        </div>
    );
};

export default NewsBoxes;