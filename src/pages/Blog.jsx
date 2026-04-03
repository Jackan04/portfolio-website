import { useQuery } from "@tanstack/react-query";
import Error from "../components/status/Error";
import Loading from "../components/status/Loading";
import BlogCard from "../components/card/BlogCard";

export default function Blog() {
  const { data, status, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await fetch("https://jacobasker.micro.blog/feed.json", {
        cache: "no-store",
      });
      if (!response.ok)
        throw new Error(`${response.status} ${response.statusText}`);
      const feed = await response.json();
      return feed.items;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (status === "error") return <Error message={error.message} />;
  if (status === "pending") return <Loading />;

  return (
    <ul className="vstack">
      {data.map((item) => (
        <li key={item.url}>
          <BlogCard
            title={item.title ?? "Untitled"}
            summary={item.summary}
            date={item.date_published}
            url={item.url}
          />
        </li>
      ))}
    </ul>
  );
}
