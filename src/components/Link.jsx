export default function Link({ href, className, rel, target, ...props }) {
  return (
    <a
      href={href}
      className={className}
      target={target ?? "_blank"}
      rel={rel ?? "noopener noreferrer"}
      {...props}
    />
  );
}
