import experiences from "../data/experiences.js";
import Label from "./Label.jsx";
import CustomLink from "./CustomLink.jsx";

export default function ExperienceCards() {
  return (
    <div className="hstack">
      {experiences.map((item) => (
        <Label key={item.name}>
          <CustomLink href={item.url}>{item.name}</CustomLink>
        </Label>
      ))}
    </div>
  );
}
