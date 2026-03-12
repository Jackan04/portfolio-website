export default function Link({ href, className, target, ...props }) {
  return (
    <a
      href={href}
      className={className}
      target={target ?? "_blank"}
      rel="noopener noreferrer dns-prefetch"
      {...props}
    />
  );
}
