import Image from "next/image";
import profile from "../../public/profile.png";

export function Profile() {
  return <Image src={profile} alt="Profile" />;
}
