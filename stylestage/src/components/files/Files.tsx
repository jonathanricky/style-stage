export default function Files() {
  return (
    <>
      <div className="container">
        <h3>Source Files</h3>
        <a href="/source-files/style.css" className="link-downloadcss" download>
          Download CSS
        </a>
        <a
          href="/source-files/stylestage.html"
          className="link-downloadhtml"
          download>
          Download HTML
        </a>
        <a
          href="https://codepen.io/5t3ph/pen/b493845ae41e836889dd84fdbb0f5291"
          className="link-codepen"
          download>
          Fork the CodePen
        </a>
      </div>
    </>
  );
}
