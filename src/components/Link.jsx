export default function Link({
  href,
  className,
  external = false,
  rel,
  target,
  ...props
}) {
  const resolvedTarget = target ?? (external ? "_blank" : undefined);
  const resolvedRel = rel ?? (external ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      className={className}
      target={resolvedTarget}
      rel={resolvedRel}
      {...props}
    />
  );
}
