import { useQuery } from "@tanstack/react-query";
import Error from "../components/status/Error";
import Loading from "../components/status/Loading";
import BlogCard from "../components/card/BlogCard";
import BlogService from "../services/blogService";

export default function Blog() {
  const { data, status, error } = useQuery({
    queryKey: ["blog"],
    queryFn: () => BlogService.getAllPosts(),
    staleTime: 1000 * 60 * 5,
  });

  if (status === "error") return <Error message={error.message} />;
  if (status === "pending") return <Loading />;

  return (
    <section aria-label="Blog posts">
      <ul className="vstack">
        {data.map((item) => (
          <li key={item.id ?? item.url}>
            <BlogCard
              title={item.title ?? "Untitled"}
              summary={item.summary}
              date={item.date_published}
              url={item.url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
