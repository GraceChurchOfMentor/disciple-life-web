import * as React from "react";
import NextHead from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Head = ({ children, title }) => (
  <React.Fragment>
    <NextHead>
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;1,300&family=Inter:wght@200&family=Spectral:ital,wght@0,200;1,200&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
      <style>{dom.css()}</style>
      {children}
    </NextHead>
  </React.Fragment>
)

export default Head