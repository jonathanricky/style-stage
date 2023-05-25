export default function Allstyles() {
  return (
    <>
      <aside id="styles">
        <div className="container">
          <h2>Featured Styles</h2>
          <ul className="features">
            <li>
              <span>
                <a href="/styles/retro-modern">
                  Retro Modern <span aria-hidden="true"></span>
                </a>
                <span>by Mike Aparicio</span>
              </span>
            </li>
            <li>
              <span>
                <a href="/styles/gallery">
                  Gallery<span aria-hidden="true"></span>
                </a>
                <span>by Olivia Ng</span>
              </span>
            </li>
            <li>
              <span>
                <a href="/styles/emphasis">
                  Emphasis<span aria-hidden="true"></span>
                </a>
                <span>by d-cs</span>
              </span>
            </li>
          </ul>

          <a href="/styles/" className="link-allstyles">
            View All Styles
          </a>
        </div>
      </aside>
    </>
  );
}
