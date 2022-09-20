import Image from "next/image";
import profile from "../../public/profile.png";

export function Profile() {
  return (
    <>
      <Image width="600px" height="200px" src={profile} alt="Profile" />
    </>
  );
}
