import styles from './header.module.scss';
import Link from "next/link";
import Button from "@/components/button/button";

export default function Header()
{
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <b>W25</b>    
                    </div>
                </div>
                <div>
                    <Link href="/">Home</Link>
                    <Link href="/">Company</Link>
                    <Link href="/">Services</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div>
                    <Button>Quotation</Button>
                </div>
            </div>
        </header>
    )
}
