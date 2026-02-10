import profileImage from "../assets/images/profile.jpeg";

export default function Home() {
  return (
    <img
      width={100}
      height={100}
      src={profileImage}
      loading="lazy"
      alt="Profile Image"
    />
  );
}
