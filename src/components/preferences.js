import { useState } from 'react';
import '../styles/preferences.css';
const Preferences = () => {
    const [categories, setCategories] = useState('')
    // const selectCategory = (e, category) => {
    //     if (e.currentTarget.classList.contains('active')) {
    //         const index = categories.indexOf(category)
    //         const temp_array = categories
    //         temp_array.splice(index, 1)
    //         e.currentTarget.classList.remove('active')
    //         setCategories([...temp_array])
    //     }
    //     else {
    //         const temp_array = categories
    //         temp_array.push(category)
    //         e.currentTarget.classList.add('active')
    //         setCategories([...temp_array])
    //     }
    // }
    const selectCategory = (e, category) => {
        const classeswithactive = document.getElementsByClassName('active')
        for (let i = 0; i < classeswithactive.length; i++) {
            if (classeswithactive[i].classList.contains('active')) {
                classeswithactive[i].classList.remove('active')
            }
        }
        e.currentTarget.classList.add("active")
        setCategories(category)
    }
    return (
        <div>
            <div className="backdrop">
            </div>
            <div className="preferences-content">
                <h2>Preferences</h2>
                <div style={{ 'marginTop': '15px' }}>
                    <label>Language</label>
                    <select id="language">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="ar">Arablic</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>
                <div style={{ 'marginTop': '15px' }}>
                    <label>country</label>
                    <select id="country">
                        <option value="in">India</option>
                        <option value="us">America</option>
                        <option value="au">Australia</option>
                        <option value="cn">China</option>
                    </select>
                </div>
                <div className="categories">
                    <span onClick={(e) => selectCategory(e, "general")}>general</span>
                    <span onClick={(e) => selectCategory(e, "business")}>business</span>
                    <span onClick={(e) => selectCategory(e, "entertainment")}>entertainment</span>
                    <span onClick={(e) => selectCategory(e, "health")}>health</span>
                    <span onClick={(e) => selectCategory(e, "science")}>science</span>
                    <span onClick={(e) => selectCategory(e, "sports")}>sports</span>
                    <span onClick={(e) => selectCategory(e, "technology")}>technology</span>
                </div>
                <button className={categories === '' ? "disablesbtn" : "activebtn"} onClick={() => {
                    window.localStorage.setItem("lauguage", document.getElementById('language').value)
                    window.localStorage.setItem("country", document.getElementById('country').value)
                    window.localStorage.setItem("categories", categories)
                    window.location = '/'
                }}>Save</button>
            </div>
        </div>
    );
}

export default Preferences;