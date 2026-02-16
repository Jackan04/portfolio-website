import styles from "./ExperienceCards.module.css";

function Card({ label, url }) {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank" rel="noopener noreferrer">
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
      <Card label="NodeJS" url="https://nodejs.org/en" />
      <Card label="React" url="https://react.dev/" />
      <Card label="React Native" url="https://reactnative.dev/" />
      <Card label="Swift" url="https://developer.apple.com/swift/" />
      <Card
        label="SwiftUI"
        url="https://developer.apple.com/documentation/swiftui"
      />
      <Card label="C#" url="https://learn.microsoft.com/en-us/dotnet/csharp/" />
      <Card
        label="SQL"
        url="https://developer.mozilla.org/en-US/docs/Glossary/SQL"
      />
    </div>
  );
}
