import './Categories.css'
const Categories = () => {

    return (
        <div>

            <div className="categories-container">
                <h1 className="categories-title titleMovement">Categories</h1>
                <p className="categories-intro">Explore our categories and find what you're looking for.</p>
                <div className="category-container">
                    <h3 className="category-name">Web Design 🎨</h3>
                    <p className='category-description'>Web design is the process of creating the visual appearance and functionality of a website. This involves combining elements of graphic design, such as the layout of text and images, with web development skills to build an intuitive and engaging user experience. Web designers consider aspects such as accessibility, usability and search engine optimization to ensure an effective and attractive design.</p>
                </div>
                <div className="category-container">
                    <h3 className="category-name">Translations 🗨</h3>
                    <p className='category-description'>Translation is the process of converting text from one language to another, keeping the meaning, style and intent of the original. It involves accurately understanding and communicating the message in another language, taking into account cultural and linguistic subtleties to ensure a faithful and fluid translation.</p>
                </div>
                <div className="category-container">
                    <h3 className="category-name">Movie Makers 🎥</h3>
                    <p className='category-description'>Movie makers are professionals in charge of the creation of films, managing aspects such as directing, producing, cinematography and editing to bring visual stories to life. This involves coordinating teams, selecting locations, directing actors and overseeing the entire filming and post-production process to achieve a coherent and captivating end product.</p>
                </div>
                <div className="category-container">
                    <h3 className="category-name">Digital Marketing 🌐</h3>
                    <p className='category-description'>Digital marketing involves the strategic use of online platforms and tools to promote products or services. This includes activities such as social media advertising, content marketing, SEO and email marketing, with the aim of reaching and captivating the target audience, generating leads and increasing the online visibility and engagement of a brand or business.</p>
                </div>
                <div className="category-container">
                    <h3 className="category-name">Development 💻</h3>
                    <p className='category-description'>Development involves the process of creating and improving software, applications or computer systems. This involves planning, designing, coding, testing and maintaining software in order to meet the specific needs of the user or the business. Developers use a variety of programming languages and tools to build efficient and functional technology solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default Categories