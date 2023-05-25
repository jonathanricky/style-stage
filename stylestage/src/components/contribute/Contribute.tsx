import Files from "../files/Files";

export default function Contribute() {
  return (
    <>
      <article id="contribute">
        <section className="container">
          <h2>Contribute</h2>
          <p>
            All who enjoy the craft of writing CSS are welcome to contribute!
          </p>
          <p>
            By participating as a contributor, your work will be shared with
            your provided attribution as long as Style Stage is online, your
            stylesheet link and any asset links remain valid, and all
            <a href="/guidelines/">contributor guidelines</a> are adhered to.
          </p>
        </section>
        <section className="container">
          <h3>Steps to Contribute</h3>
          <ol>
            <li>
              Download the source files listed below to use as a reference to
              build your stylesheet, or start from the
              <a href="https://github.com/5t3ph/stylestage-sass">
                Sass template
              </a>
              .
            </li>
            <li>
              Host your completed stylesheet at a public URL, and ensure all
              asset links are absolute URLs to external resources.
            </li>
            <li>
              <a href="https://github.com/5t3ph/stylestage">
                Create a pull request
              </a>
              to add your information as a unique .json file to:
              src/_data/styles. The schema is detailed in the repo README, and
              you can review the FAQ on
              <a href="/guidelines/#how-do-i-create-a-pull-request-pr">
                creating a pull request
              </a>
              .
            </li>
            <li>
              If your contribution abides by the previously listed guidelines,
              your submission will be added!
            </li>
          </ol>
        </section>
        <Files />
      </article>
    </>
  );
}
