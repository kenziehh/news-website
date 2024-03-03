import { News } from "@/types/News";

export default function Home({ news }: { news: News[] }) {
    console.log(news);
    return (
        <main className="container">
            <section className="flex justify-center items-center flex-col md:flex-row gap-10 md:gap-20">
                <div className="flex flex-col gap-12">
                    <h1 className="text-4xl font-semibold">
                        See All News In The World Here!
                    </h1>
                    <p className="max-w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim numquam, non necessitatibus voluptatibus, mollitia
                        consectetur fuga aut dignissimos architecto blanditiis
                        eos assumenda eveniet maxime. Aspernatur id eius
                        quisquam rem cum?
                    </p>
                </div>
                <img
                    src="/assets/images/news-image.png"
                    alt=""
                    className="max-w-96 max-h-96"
                />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {news?.map((newsItem: News) => {
                    return (
                        <div className="max-w-96 flex flex-col items-center gap-8 shadow-lg p-4">
                            <img
                                src={newsItem.image}
                                alt=""
                                className="max-w-64 max-h-96"
                            />
                            <div className="flex flex-col gap-3">
                                <h3>{newsItem.title}</h3>
                                <p>{newsItem.description}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
