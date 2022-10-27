import Image from "next/image";
import thought from "../../public/Thought.svg";

export function ThoughtImage() {
  return (
    <Image
      src={thought}
      alt="Thought"
      placeholder="blur"
      blurDataURL={thought}
    />
  );
}
