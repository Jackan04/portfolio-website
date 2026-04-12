import GetInTouch from "../components/GetInTouch.jsx";
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
        <h2>Get in Touch</h2>
        <GetInTouch />
      </section>
    </>
  );
}
