import Image from "next/image";
import headerLeftSrc from "../../public/home/header-left.png";
import headerRightSrc from "../../public/home/header-right.png";
import headerCenterSrc from "../../public/home/header-center.png";
import introduceSrc from "../../public/home/introduce.png";
import service1Src from "../../public/home/service1.png";
import service2Src from "../../public/home/service2.png";
import service3Src from "../../public/home/service3.png";
import service4Src from "../../public/home/service4.png";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={styles.page}>
			<header>
				<Image
					className="header-left"
					height={493}
					src={headerLeftSrc}
					alt=""
				/>
				<Image
					className="header-center"
					height={320}
					src={headerCenterSrc}
					alt=""
				/>
				<Image
					className="header-right"
					height={493}
					src={headerRightSrc}
					alt=""
				/>
			</header>

			<section className={styles.content}>
				<div className={styles["title"]}>
					<span className={styles["title-str"]}>公司介绍</span>
				</div>
				<div className={styles["intro"]}>
					<div className={styles["intro-left"]}>
						<p>
							海银网络科技是海银控股集团下属的科技服务公司，为控股架构内外的公司提供专业、先进的科技化服务；
						</p>
						<b>
							打造高质量的海银数字化体系，不断创新赋能海银控股集团数字化转型。
						</b>
					</div>
					<div className={styles["intro-right"]}>
						<Image
							className={styles["img-introduce"]}
							src={introduceSrc}
							width={500}
							alt="公司介绍"
						/>
					</div>
				</div>
			</section>

			<section className={styles.content}>
				<div className={styles["title"]}>
					<span className={styles["title-str"]}>关于海银</span>
				</div>
				<p>
					2006年，海银财富成立于上海陆家嘴核心区域，屹立在国内外知名金融投资机构之林。
					经过十余年发展，公司在国内80余座主要城市先后设立170余家财富中心（数据统计时间截至2022年3月），在香港、英国、美国等地也逐渐布局。
					海银财富旗下的海银基金销售有限公司拥有中国证券监督管理委员会核准颁发的《经营证券期货业务许可证》。
				</p>
				<p>
					海银财富拥有员工近2800人，汇集银行、证券、信托等各行业精英翘楚，集聚CFP和CFA等金融资质加持专业人才，
					为累计超过十万余的高净值个人和机构提供资产配置咨询、财富管理、家族办公室等综合服务。
				</p>
				<div className="about-str">
					海银财富经历了数次经济周期考验，凭借稳健合规的经营理念，获得了客户信赖，同时助力了行业发展，致力于成为财富管理行业领跑者。
				</div>
			</section>

			<section className={styles.content}>
				<div className={styles["title"]}>
					<span className={styles["title-str"]}>海银服务</span>
				</div>

				<div className={styles["service-box"]}>
					<div className={styles["service-item"]}>
						<Image src={service1Src} width={280} alt="" />
						<div>
							<p>海财富管理</p>
							<p>私人财富管理</p>
							<p>机构综合服务</p>
							<p>家族财富传承</p>
							<p>投资者教育</p>
						</div>
					</div>
					<div className={styles["service-item"]}>
						<Image src={service2Src} width={280} alt="" />
						<div>
							<p className="item-title">金融科技</p>
							<p>一站式投资平台</p>
							<p>个性化定制</p>
							<p>预期管理</p>
						</div>
					</div>
					<div className={styles["service-item"]}>
						<Image src={service3Src} width={280} alt="" />
						<div>
							<p className="item-title">国际化及多元业务</p>
							<p>海外投资规划及咨询</p>
							<p>海外资产管理</p>
							<p>海外置业及身份规划</p>
						</div>
					</div>
					<div className={styles["service-item"]}>
						<Image src={service4Src} width={280} alt="" />
						<div>
							<p className="item-title">会员服务</p>
							<p className="item-str">会员等级</p>
							<p className="item-str">尊享服务</p>
							<p className="item-str">智能客服</p>
							<p className="item-str">会员活动</p>
						</div>
					</div>
				</div>
			</section>

			<footer>
				<div>上海海银网络科技有限公司 版权所有</div>
				<div className="footer-bottom">
					<span>
						copyright 1999-{new Date().getFullYear()} all rights reserved.
						<a
							href="https://beian.miit.gov.cn/#/Integrated/index"
							target="_blank"
						>
							沪ICP备2022017850号-1
						</a>
					</span>
				</div>
			</footer>
		</div>
	);
}
