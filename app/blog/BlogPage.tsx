import BlogHeader from '../ui/(components)/blog/BlogHeader'
import BlogFeaturedArticle from '../ui/(components)/blog/BlogFeaturedArticle'
import BlogPopularArticle from '../ui/(components)/blog/BlogPopularArticle'
import BlogRecentArticle from '../ui/(components)/blog/BlogRecentArticle'

const BlogPage = () => {
    return (
        <>
            <BlogHeader />
            <BlogFeaturedArticle />
            <BlogPopularArticle />
            <BlogRecentArticle />
        </>
    );
};

export default BlogPage;