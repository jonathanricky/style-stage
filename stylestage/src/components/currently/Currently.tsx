export default function Allstyles() {
  return (
    <>
      <aside className="profile" aria-labelledby="profile-title">
        <div className="container">
          <h4 id="profile-title">Currently Staged Style</h4>
          <ul>
            <li className="profile-title">
              <span>Title:</span> <span>Main Stage</span>
            </li>
            <li className="profile-author">
              <span>Author:</span> <span>Stephanie Eckles</span>
            </li>
            <li className="profile-twitter">
              <span>Twitter:</span>
              <span>
                <a href="https://twitter.com/5t3ph">5t3ph</a>
              </span>
            </li>
            <li className="profile-website">
              <span>Website:</span>
              <span>
                <a href="https://moderncss.dev">ModernCSS.dev</a>
              </span>
            </li>
          </ul>
          <a href="/styles/css/main-stage.css">View Stylesheet</a>
        </div>
      </aside>
    </>
  );
}
