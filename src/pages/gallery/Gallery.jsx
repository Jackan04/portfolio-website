import { useInfiniteQuery } from "@tanstack/react-query";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import Loading from "../../components/status/Loading.jsx";
import Error from "../../components/status/Error.jsx";
import CustomLink from "../../components/CustomLink.jsx";

export default function Gallery() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: ({ pageParam }) => UnsplashService.getAllImages(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.length > 0 && lastPage.length >= 12;

      return hasMore ? allPages.length + 1 : null;
    },
  });

  if (status === "pending") return <Loading />;
  if (status === "error") return <Error message={error.message} />;

  const images = data.pages.flat();

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={`hover-scale ${styles.imageCard}`}>
            <CustomLink href={image.links.html}>
              <img
                src={image.urls.small}
                loading="lazy"
                alt={image.alt_description}
              />
            </CustomLink>
          </div>
        ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className={`hover-opacity ${styles.loadMoreButton}`}
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
