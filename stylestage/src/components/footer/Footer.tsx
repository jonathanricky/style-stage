export default function Footer() {
  return (
    <>
      <footer className="page-footer">
        <div className="container">
          <p>
            Created and maintained by
            <a href="https://twitter.com/5t3ph">Stephanie Eckles (@5t3ph)</a>
          </p>
          <ul>
            <li>
              <a
                href="https://twitter.com/5t3ph"
                className="link-twittercontact">
                Contact on Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/5t3ph/stylestage"
                className="link-github">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  focusable="false">
                  <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                </svg> */}
                Star on Github
              </a>
            </li>
            <li>
              <a href="/feed/" className="link-rss">
                RSS Feed
              </a>
            </li>
            <li>
              <a href="/subscribe/" className="link-support">
                Subscribe to Updates
              </a>
            </li>
          </ul>
          <p>
            Crafted with semantic, accessible HTML and CSS,
            <strong>Style Stage</strong> is generated with
            <a href="https://11ty.dev">11ty</a> and hosted on
            <a href="https://netlify.com">Netlify</a>. This project uses
            <a href="https://postcss.org/">PostCSS</a> with
            <a href="https://github.com/postcss/autoprefixer">autoprefixer</a>.
          </p>
          <p>
            Contributors retain copyright of all graphics used, and styles are
            available under
            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">
              CC BY-NC-SA
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
