"use client";
import Link from "next/link";
import s from "./Menu.module.css";
import { usePathname } from "next/navigation";

interface Items {
  value: string;
  href: string;
}

interface MenuProps {
  header: string;
  items: Items[];
  active: boolean;
  setActive: (arg: boolean) => void;
}

function Menu({ header, items, active, setActive }: MenuProps) {
    const path = usePathname();
  return (
    <div
      className={active ? `${s.menu} ${s.active}` : `${s.menu}`}
      onClick={() => setActive(false)}
    >
      <div className={s.blur} />
      <div className={s.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.menuHeader}>{header}</div>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <Link
                href={item.href}
                className={path === item.href ? `${s.navItemActive}` : ""}
                onClick={() => setActive(false)}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
