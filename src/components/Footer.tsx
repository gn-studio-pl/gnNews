import "../styles/components/footer_style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        created by <a href="https://github.com/annakoruc">annakoruc</a> |
        recruitment task <a href="https://www.gnstudio.dev/">gnStudio</a>
      </p>
      <div className="footer_data">
        <span className="clock">12:00</span>
        <p>|</p>
        <p>number of articles: 300 </p>
      </div>
    </footer>
  );
};
