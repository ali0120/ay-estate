import { Metadata } from "next";
import { fetchBlogArticleDetails, fetchBlogRecentArticles } from "@/app/helper/services/blog.api";
import ArticleDetails from "@/app/ui/(components)/blog/ArticleDetails";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const { articles } = await fetchBlogRecentArticles();

    // Ensure each article has an id property
    return articles?.map((article: { id: number }) => ({
        id: article.id.toString()
    }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = params;
    if (!id) {
        notFound();
    }

    const article = await fetchBlogArticleDetails(id);

    if (article.error) {
        notFound();
    }

    const { title, description, author, image } = article;

    return {
        title: `${title} - AyEstate Blog | Real Estate Insights`,
        description: description || "Read insightful articles on real estate, investment strategies, and more on AyEstate's blog.",
        keywords: `${title}, Real Estate Blog, Property Investment, ${author}, Real Estate Tips`,
        openGraph: {
            title: `${title} - AyEstate Blog | Real Estate Insights`,
            description: description,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${id}`,
            type: "article",
            images: image || "/png/blog/one.png",
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} - AyEstate Blog | Real Estate Insights`,
            description: description,
            images: image || "/png/blog/one.png",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${id}`,
        },
    };
}

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
