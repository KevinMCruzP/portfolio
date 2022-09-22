import Image from "next/image";
import profile from "../../public/profile.jpg";

export function Profile() {
  return <Image src={profile} alt="Profile" />;
}
