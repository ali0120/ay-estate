import { fetchBlogArticleDetails } from "@/app/helper/services/blog.api";
import ArticleDetails from "@/app/ui/(components)/blog/ArticleDetails";
import { notFound } from "next/navigation";

const ArticleDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    if (!id) {
        notFound();
    }
    
    const article = await fetchBlogArticleDetails(id);
    
    if (article.error) {
        notFound();
    }

    return (
        <section>
            <ArticleDetails article={article} />
        </section>
    );
};

export default ArticleDetailsPage;
