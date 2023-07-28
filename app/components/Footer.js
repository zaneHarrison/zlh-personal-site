import footerStyles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className="site-footer">
      <div className={footerStyles["footer-text"]}>
        <p>This website was built by Zane Harrison</p>
      </div>
    </div>
  );
}
