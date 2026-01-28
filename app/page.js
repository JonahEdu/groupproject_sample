import Image from "next/image";
import styles from "./page.module.css";

import Button from "@/shared/components/ButtonGroups"

export default function Home() {
  return (
    <div>
      <Button type="Blue"></Button>
      <Button type="Purple"></Button>
      <Button type="Orange"></Button>
    </div>

  );
}
