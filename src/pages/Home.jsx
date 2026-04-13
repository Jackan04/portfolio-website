import Connect from "../components/Connect.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import HeroHeader from "../components/HeroHeader.jsx";

export default function Home() {
  return (
    <>
      <section>
        <HeroHeader />
      </section>
      <section>
        <FeaturedProjects />
      </section>

      <section>
        <h2>Connect</h2>
        <Connect />
      </section>
    </>
  );
}
