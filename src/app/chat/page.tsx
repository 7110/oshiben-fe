import Image from "next/image";
import styles from "./page.module.css";

import { withBasePath } from "@/utils";

export default function Chat() {
    return (
        <main className={styles.ChatPage} style={ {backgroundImage: `url(${withBasePath('/background.png')})`}}>
            aa
        </main>
    )
}
