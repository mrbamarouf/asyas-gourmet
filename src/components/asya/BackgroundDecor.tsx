import oliveDecoration from "@/assets/olive-decoration.png";

const decorPositions = [
  "background-decor-image background-decor-left background-decor-top",
  "background-decor-image background-decor-left background-decor-bottom",
  "background-decor-image background-decor-right background-decor-top",
  "background-decor-image background-decor-right background-decor-bottom",
];

export function BackgroundDecor() {
  return (
    <div className="background-decor" aria-hidden="true">
      {decorPositions.map((className) => (
        <img
          key={className}
          className={className}
          src={oliveDecoration}
          alt=""
          width={260}
          height={520}
          loading="eager"
          decoding="async"
        />
      ))}
    </div>
  );
}
