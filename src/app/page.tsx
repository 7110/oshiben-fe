import Link from 'next/link';
import styles from './page.module.css';

import { withBasePath } from '@/utils';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href={'/chat'}>チャットをはじめるよ❤️ click</Link>
      </main>
    </div>
  );
}
