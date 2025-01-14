import { Metadata } from "next";
import { fetchBlogArticleDetails, fetchBlogRecentArticles } from "@/app/helper/services/blog.api";
import ArticleDetails from "@/app/ui/(components)/blog/ArticleDetails";
import { notFound } from "next/navigation";
import { refactorTitleToSlug } from "@/utils/refactorTitle";

export async function generateStaticParams() {
    const { articles } = await fetchBlogRecentArticles();
    return articles?.map((article: { title: string }) => ({
        title: refactorTitleToSlug(article.title)
    }));
}

export async function generateMetadata({ params }: { params: { title: string } }): Promise<Metadata> {
    const { title } = params;
    if (!title) {
        return {
            title: "Article Not Found",
            description: "The requested article does not exist.",
            openGraph: {
                title: "Article Not Found",
                description: "The requested article does not exist.",
            },
        };
    }

    const article = await fetchBlogArticleDetails(title);

    if (article.error) {
        notFound();
    }

    const { description, author, image } = article;

    return {
        title: `${title} - AyEstate Blog`,
        description: `${description} - Discover why real estate is the smartest investment choice.`,
        keywords: `${refactorTitleToSlug(title)}, Real Estate Blog, Property Investment, ${author}, Real Estate Tips`,
        openGraph: {
            title: `${title} - AyEstate Blog | Real Estate Insights`,
            description: `${description} - Discover why real estate is the smartest investment choice.`,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${refactorTitleToSlug(title)}`,
            type: "article",
            images: image || "/png/blog/one.png",
        },
        twitter: {
            card: "summary_large_image",
            title: `${refactorTitleToSlug(title)} - AyEstate Blog | Real Estate Insights`,
            description: `${description} - Discover why real estate is the smartest investment choice.`,
            images: image || "/png/blog/one.png",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${refactorTitleToSlug(title)}`,
            languages: {
                en: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${refactorTitleToSlug(title)}`,
                "x-default": `${process.env.NEXT_PUBLIC_BASE_URL}/blog/recent-articles/${refactorTitleToSlug(title)}`,
            },
        },
    };
}

const ArticleDetailsPage = async ({ params }: { params: { title: string } }) => {
    const { title } = params;
    if (!title) {
        notFound();
    }

    const article = await fetchBlogArticleDetails(title);

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
