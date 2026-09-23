const petals = [
  "petal-one",
  "petal-two",
  "petal-three",
  "petal-four",
  "petal-five",
  "petal-six",
  "petal-seven",
  "petal-eight",
  "petal-nine",
  "petal-ten",
];

export default function FloatingPetals() {
  return (
    <div className="floating-petals" aria-hidden="true">
      {petals.map((petal) => (
        <span key={petal} className={`floating-petal ${petal}`} />
      ))}
    </div>
  );
}