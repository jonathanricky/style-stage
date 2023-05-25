
export default function Homepage() {
  return (
    <div>
      <nav>
        <ul className="flex justify-center ml-auto space-x-4">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#guidelines">Guidelines</a>
          </li>
          <li>
            <a href="#contribute">Contribute</a>
          </li>
          <li>
            <a href="#files">Files</a>
          </li>
          <li>
            <a href="/styles/">All Styles</a>
          </li>
          <li>
            <a href="/resources/">Resources</a>
          </li>
        </ul>
      </nav>
      <div>
          <h1 className="flex justify-center text-5xl m-16">Style Stage</h1>
          <h2 className="flex justify-center">A modern CSS showcase styled by community contributions</h2>
          <p className="flex justify-center">
            Maintained by 
            <a href="https://twitter.com/5t3ph">Stephanie Eckles</a> of 
            <a href="https://moderncss.dev">ModernCSS.dev</a>
          </p>
          <a href="https://github.com/5t3ph/stylestage" className="flex justify-center link-github">
            {/* <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false">
                            <path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path>
                        </svg>
                    </span> */}
            Star on Github 
          </a>
      </div>
    </div>
  );
}
