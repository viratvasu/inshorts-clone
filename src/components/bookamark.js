import '../styles/newsBoxes.css';
const Bookmark = () => {
    const renderBookmarks = () => {
        if (window.localStorage.getItem("bookmarks")) {
            let bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"))
            if (bookmarks.length === 0) {
                return <p style={{ 'marginTop': '10px', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No Bookmarks Found</p>
            }
            return bookmarks.map(dataItem => {
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
                                <div className="full-article-container"> <center><a href={dataItem.url} target="_blank">Full Article</a></center></div>
                                <div className="news-info">
                                    <span className="category">{dataItem.category}</span>
                                    <span className="date">{dataItem.published_at.substring(0, 10)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bookmark" style={{ 'cursor': 'pointer' }} onClick={(e) => {
                            let bookmarks = JSON.parse(window.localStorage.getItem("bookmarks"))
                            let index = -1;
                            for (let i = 0; i < bookmarks.length; i++) {
                                if (bookmarks[i].title === dataItem.title) {
                                    index = i
                                    break;
                                }
                            }
                            bookmarks.splice(index, 1)
                            window.localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
                            e.currentTarget.parentElement.style.display = "none"
                        }}>
                            <svg id="delete" xmlns="http://www.w3.org/2000/svg" width="455.112" height="455.112" viewBox="0 0 455.112 455.112">
                                <circle id="Ellipse_1" data-name="Ellipse 1" cx="227.556" cy="227.556" r="227.556" transform="translate(0 0)" fill="#e24c4b" />
                                <path id="Path_1" data-name="Path 1" d="M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556-72.533,0-136.533-32.711-177.778-85.333,38.4,31.289,88.178,49.778,142.222,49.778,125.156,0,227.556-102.4,227.556-227.556,0-54.044-18.489-103.822-49.778-142.222C422.4,91.022,455.111,155.022,455.111,227.556Z" fill="#d1403f" />
                                <path id="Path_2" data-name="Path 2" d="M331.378,331.378a22.322,22.322,0,0,1-31.289,0l-72.533-72.533-72.533,72.533a22.125,22.125,0,0,1-31.289-31.289l72.533-72.533-72.533-72.533a22.125,22.125,0,1,1,31.289-31.289l72.533,72.533,72.533-72.533a22.125,22.125,0,0,1,31.289,31.289l-72.533,72.533,72.533,72.533A22.322,22.322,0,0,1,331.378,331.378Z" fill="#fff" />
                            </svg>
                        </div>
                    </div>
                )
            })
        } else {
            return <p style={{ 'marginTop': '10px', 'display': 'block', 'textAlign': 'center', 'color': '#e84545' }}>No Bookmarks Found</p>
        }
    }
    return (
        <div className="container" style={{ 'margin': '20px 0' }}>
            <h2>Bookmarks</h2>
            <div className="box-container">{renderBookmarks()}</div>
        </div>
    );
}

export default Bookmark;