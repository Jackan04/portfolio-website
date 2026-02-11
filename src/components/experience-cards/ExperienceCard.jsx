import styles from "./ExperienceCards.module.css";

function Card({ label, url }) {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank">
        {label}
      </a>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <div className={styles.cardsContainer}>
      <Card
        label="JavaScript"
        url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      />
      <Card
        label="Swift & SwiftUI"
        url="https://developer.apple.com/documentation/swiftui"
      />
      <Card label="NodeJS" url="https://nodejs.org/docs/latest/api/" />
      <Card label="React" url="https://react.dev/" />
      <Card label="React Native" url="https://reactnative.dev/" />
      <Card label="C#" url="https://learn.microsoft.com/en-us/dotnet/csharp/" />
      <Card
        label="SQL"
        url="https://developer.mozilla.org/en-US/docs/Glossary/SQL"
      />
    </div>
  );
}
