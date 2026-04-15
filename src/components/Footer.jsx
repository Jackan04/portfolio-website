export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="">Jacob Asker &copy; {year}</p>
    </footer>
  );
}
