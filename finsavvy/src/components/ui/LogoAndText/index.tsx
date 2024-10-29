import logo from "@/../public/logo.png";
import Image from "next/image";

export default function LogoAndText() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Image src={logo} alt="logo" width={56} height={56} />
      <h2 style={{ color: "#2a737d" }}>FinSavvy</h2>
    </div>
  );
}
