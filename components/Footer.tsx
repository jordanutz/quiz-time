import React, { FC } from "react";
import { FooterProps } from "../types/components";

const Footer:FC<FooterProps> = ({ modifier = "", children }): JSX.Element => (
   <footer className={`quiz-modal__footer ${modifier}`}>{children}</footer>
);

export default Footer;