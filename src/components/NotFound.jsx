import Link from "./Link.jsx";

export default function NotFound() {
  return (
    <>
      <h2>404 - Page Not Found</h2>
      <p>
        The page you're looking for seems to have wandered off. Don't worry, it
        happens to the best of us!
      </p>
      <Link href="/" className="button">
        Take Me Home
      </Link>
    </>
  );
}
