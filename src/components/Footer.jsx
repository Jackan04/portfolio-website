export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="text-secondary">Jacob Asker &copy; {year}</p>
    </footer>
  );
}
