import { useState, useLayoutEffect } from "react";
import * as React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../styles/homepagestyle.scss";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import { gsap } from "gsap";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const navPages = [
  {
    title: "Works",
    navigate_url: "/works",
    imageSrc: "./assets/works.svg",
  },
  {
    title: "Resume",
    navigate_url: "/resume",
    imageSrc: "./assets/resume.svg",
  },
  {
    title: "self",
    navigate_url: "/self",
    imageSrc: "./assets/self.svg",
  },
];

function ThemeChangeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
}

export default function Home() {
  const [mode, setMode] = useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const onMouseEnter = (e) => {
    console.log(
      "AAAAAAAAAAAAAAAAAA",
      e.target.src.slice(0, e.target.src.length - 4) + "_white.svg",
      e.target.src
    );
    return e.target.src.slice(0, e.target.src.length - 4) + "_white.svg";
  };

  useLayoutEffect(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });

    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");

    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    gsap.set(".ball1", { xPercent: -50, yPercent: -50 });
    const ball1 = document.querySelector(".ball1");
    const pos1 = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse1 = { x: pos1.x, y: pos1.y };
    const speed1 = 0.1;
    const xSet1 = gsap.quickSetter(ball1, "x", "px");
    const ySet1 = gsap.quickSetter(ball1, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse1.x = e.x;
      mouse1.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt1 = 1.0 - Math.pow(1.0 - speed1, gsap.ticker.deltaRatio());

      pos1.x += (mouse1.x - pos1.x) * dt1;
      pos1.y += (mouse1.y - pos1.y) * dt1;
      xSet1(pos1.x);
      ySet1(pos1.y);
    });
    let mouseMove = document.querySelectorAll(".mouseHoverEventChange");
    mouseMove.forEach((el) => {
      let cursor = document.querySelector(".ball1");
      el.addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
          width: "70px",
          height: "70px",
          opacity: 0.4,
        });
        gsap.to(el, {
          background: "#ff7675",
          color: "white",
          boxShadow: "10px 10px 40px grey",
          borderRadius: "5px",
          rotation: -10,
          scale: 1.2,
          // transformOrigin: "left 50%",
        });
      });
      el.addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
          width: "30px",
          height: "30px",
          opacity: 1,
        });
        gsap.to(el, {
          background: "none",
          color: "rgb(88, 89, 91)",
          boxShadow: "none",
          borderRadius: "0px",
          rotation: 0,
          scale: 1,
        });
      });
    });
    let homecontainer = document.querySelector(".mouseHoverEventChange img");
    // homecontainer.addEventListener("click", (e) => {
    //   let cursor = document.querySelector(".ball1");
    //   gsap.to(cursor, {
    //     height: "70px",
    //     duration: 1,
    //   });
    //   gsap.to(cursor, {
    //     width: "30px",
    //     height: "30px",
    //     duration: 1,
    //   });
    // });
  }, []);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div
        class="ball1"
        style={{
          background: mode == "light" ? "black" : "white",
          // backgroundColor: "transparent",
        }}
      ></div>
      <div
        class="ball"
        style={{ background: mode == "light" ? "red" : "green" }}
      ></div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            // color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          <Grid
            container
            className="containerForhomePage"
            style={{
              backgroundColor: mode == "ligh" && "rgba(242, 240, 238, 1)",
            }}
          >
            <Grid
              container
              className="containerForPortfolio"
              style={{
                backgroundColor: mode == "light" && "rgba(255, 255, 255, 1)",
              }}
            >
              {" "}
              <Grid item md={2} lg={2} sm={2} className="containerforLeft">
                <Grid
                  item
                  md={12}
                  lg={12}
                  sm={12}
                  className="containerForFolioLogo"
                >
                  <img src="./logo.png" className="logoImgStyle" />
                </Grid>
              </Grid>
              <Grid item md={10} lg={10} sm={10} className="navcontainer">
                <Grid
                  item
                  md={6}
                  lg={6}
                  sm={6}
                  className="containerForContactDtls"
                >
                  <Grid container>
                    <Grid item md={9} lg={9} sm={9}>
                      <div className="mouseHoverEventChange emaildiv">
                        <div className="emailIconStyle">
                          <img
                            src="./assets/email.svg"
                            className="svgImgStyle"
                            onMouseOver={(e) =>
                              (e.currentTarget.src = onMouseEnter(e))
                            }
                            onMouseOut={(e) => {
                              e.current.src = onMouseEnter(e);
                            }}
                          />{" "}
                        </div>
                        <div className="emailStyle">
                          jeevathangavelss@gmail.com
                        </div>
                      </div>
                    </Grid>
                    <div
                      item
                      md={3}
                      lg={3}
                      sm={3}
                      className="themeChangeButton"
                    >
                      <ThemeChangeButton />
                    </div>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={6}
                  lg={6}
                  sm={6}
                  className="containerForNavLinks"
                >
                  <Grid container>
                    {navPages.map((item, index) => (
                      <Grid item md={4} lg={4} sm={4}>
                        <div className="mouseHoverEventChange emaildiv">
                          <a
                            href={item.navigate_url}
                            className="anchorTextdecorationNone"
                          >
                            <div className="emailIconStyle">
                              <img
                                src={item.imageSrc}
                                className="svgImgStyle"
                              />{" "}
                            </div>
                            <div className="emailStyle">{item.title}</div>
                          </a>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
