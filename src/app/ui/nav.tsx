"use client";

import Link from "next/link";
import classnames from "classnames";
import styles from "./nav.module.scss";
import { usePathname } from "next/navigation";

const MENU_LIST = [
	{
		path: "/",
		name: "主页",
	},
	{
		path: "/company",
		name: "公司介绍",
	},
	{
		path: "/product",
		name: "产品介绍",
	},
	{
		path: "/join",
		name: "加入我们",
	},
];

export default function NavBar() {
	const pathname = usePathname();

	return (
		<div className={styles["nav-bar"]}>
			{MENU_LIST.map((item) => (
				<Link
					href={item.path}
					key={item.name}
					className={classnames({
						[styles.active]: item.path === pathname,
					})}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
}
