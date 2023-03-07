import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/40" />
            <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">
                Welcom to Amazon Web Scrapper
            </h1>
            <h2 className="text-2xl font-bold text-center text-black/60">
                Type products you want to check.
            </h2>
            <p className="text-lg italic text-center text-red-400">
                It's important to note that any Amazon web scraper created for
                educational purposes ONLY, should be used responsibly and not
                for any commercial purposes or to violate Amazon's terms of
                service.
            </p>
            <h2 className="text-xl font-bold text-center text-black/60">
                Is It Legal to Scrape the Web?
            </h2>
            <p className="text-lg italic text-center text-black/50">
                <span className="text-black font-bold">
                    The problem occurs when people scrape the web:
                </span>{" "}
                Without consulting its Terms of Service. Note that you can
                accept Terms of Service just by browsing the website. This means
                that if all automatic data collection is forbidden in the ToS,
                scraping this website may be illegal. Trying to gather private
                data behind logins. Besides, it’s illegal to sell scraped
                personal data to any third parties for profit. C’mon, there’s
                plenty of better ways to earn cash transparently! Copying the
                copyrighted content. Copyrighted data can include designs,
                articles, videos, and anything else that is considered creative
                work. However, prices and other similar information aren’t
                generally seen as protected by copyright law.
            </p>
        </div>
    );
}

export default HomePage;
