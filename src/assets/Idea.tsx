import Image from "next/image";
import idea from "../../public/Idea.svg";

export function IdeaImage() {
  return <Image src={idea} alt="Idea" placeholder="blur" blurDataURL={idea} />;
}
