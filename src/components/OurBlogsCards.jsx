import './OurBlogsCards.css'


function OurBlogsCards(OurBlogs){
    return <div className="Each_OurBlogCard">
                <div className="Our_Blog_Image">
                    <img src={OurBlogs.image} alt={OurBlogs.imagealt} />
                </div>
                <div className="Our_Blog_Text">
                    <div className="Our_Blog_Date">
                        <i class="fa-regular fa-clock"></i>
                        <span>{OurBlogs.date}</span>
                    </div>
                    <p className="Our_Blog_Heading">
                        {OurBlogs.title}
                    </p>
                </div>
            </div>
}
export default OurBlogsCards;