import Image from "next/image";
import bug from "../../public/Bug.svg";

export function BugImage() {
  return <Image src={bug} alt="Bug" placeholder="blur" blurDataURL={bug} />;
}
