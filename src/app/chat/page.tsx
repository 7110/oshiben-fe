// import Image from "next/image";
import styles from "./page.module.css";

import FloatingNav from "@/components/FloatingNav";

import { withBasePath } from "@/utils";

export default function Chat() {
    return (
        <main className={styles.ChatPage} style={ {backgroundImage: `url(${withBasePath('/background.png')})`}}>
            
            <FloatingNav></FloatingNav>
        </main>
    )
}
