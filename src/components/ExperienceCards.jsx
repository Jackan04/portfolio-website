import experiences from "../data/experiences.js";
import Label from "./Label.jsx";

export default function ExperienceCards() {
  return (
    <div className="hstack">
      {experiences.map((item) => (
        <Label key={item.name}>
          <a href={item.url}>{item.name}</a>
        </Label>
      ))}
    </div>
  );
}
