import Image from "next/image";
import styles from "../../styles/bishamonten/bishamonten.module.css";
import Header from "./components/Header";
import HeadInfo from "./HeadInfo";
import ShopImage from "../../public/shop-logo.png";
import BgVideo from "../../public/bishamonten/video/stir-fly.mp4";
import { useEffect, useState } from "react";
import Menu from "./components/Header/Menu";
import Top from "./components/Main/Top";
import Footer from "./components/Footer";
import { Grid, Typography } from "@mui/material";
import ModalMenu from "./components/modalMenu";
import { smallTextGold, textGold } from "../../styles/bishamonten/muiStyles";

export default function Bishamonten() {
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      let y = window.outerHeight;
      setWindowY(y);
    });
  }, []);

  useEffect(() => {
    let y = window.outerHeight;
    setWindowY(y);
  }, []);

  return (
    <>
      <HeadInfo />

      <div className={styles.bgVideo}>
        <video
          className={styles.video}
          autoPlay={true}
          muted
          loop
          height={windowY}
          width="100%"
          playsInline={true}
        >
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <Grid width="auto" height="auto" position="fixed" zIndex={10000}>
            <ModalMenu />
          </Grid>
          <div className={styles.topBox}>
            <div className={styles.titleLogo}>
              <Grid p={4}>
                <Image
                  width={195}
                  height={80}
                  src={ShopImage}
                  alt="お店の画像"
                />
              </Grid>

              {/* <Image
                width={280}
                height={157}
                src={ShopImage}
                alt="お店の画像"
              /> */}
            </div>

            <h1 className={styles.title}>
              毘沙門店　公式サイト｜日常に四川を味える喜びを
            </h1>
            <div className={styles.sBox}>
              <div
                style={{
                  width: "100%",
                  display: "flex ",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",

                    paddingLeft: "5rem",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={textGold}
                    fontWeight="600"
                    style={{
                      fontSize: "4.5rem",
                      margin: "0",
                    }}
                  >
                    金竜の風を
                    <br />
                    あなたに
                  </Typography>

                  <Typography
                    variant="p"
                    component="p"
                    sx={smallTextGold}
                    fontWeight="600"
                    style={{
                      fontSize: "1.2rem",
                      margin: "0",
                    }}
                  >
                    四川の深みを一つのプレートから
                  </Typography>
                </div>

                <h3
                  style={{
                    textOrientation: "upright",
                    fontSize: "0.8rem",
                    writingMode: "vertical-rl",
                    right: "0px",
                    fontFamily: "sans-serif",
                  }}
                >
                  スクロール　→
                </h3>
              </div>
              <div className={styles.headerBox}>
                <div style={{ position: "absolute", top: "100vh" }}>
                  <Top />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
