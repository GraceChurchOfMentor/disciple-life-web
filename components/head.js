import * as React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

const Head = ({ children, title }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&family=Inter:wght@200&family=Spectral:ital,wght@0,200;1,200&display=swap" />
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      {children}
    </NextHead>
  </React.Fragment>
)

export default Head