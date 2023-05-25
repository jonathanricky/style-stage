export default function About() {
  return (
    <>
      <article id="about">
        <section className="container">
          <h2>Setting the Stage</h2>
          <p>
            In 2003,
            <a href="http://daveshea.com/projects/zen/">Dave Shea</a> began a
            legendary project called
            <a href="http://www.csszengarden.com/">CSS Zen Garden</a> that
            provided a demonstration of "what can be accomplished through
            CSS-based design" until submissions stopped in 2013.
          </p>
          <p>
            <strong>Style Stage</strong> seeks to rekindle that spirit by
            providing this page as the base HTML for contributors - like you! -
            to re-style by submitting an alternate stylesheet.
          </p>
          <blockquote>
            <p>
              <strong>How it works:</strong> Visit the
              <a href="/styles/">"All Styles"</a> directory page and select a
              style to view. A page with identical content to this one will be
              presented with a new design provided from a contributed
              stylesheet. CSS practitioners of any skill level are invited to
              <a href="#contribute">submit a stylesheet</a>!
            </p>
          </blockquote>
          <p>
            The HTML for this page was created to be semantic, accessible, and
            free of nearly all other opinions. Nested sectioning elements with
            the className `.container` serve as additional style aids since you
            do not have access to alter the base HTML. IDs are included where
            needed for nav anchors or accessibility, and a small number of
            additional classNamees are provided for key elements without IDs.
            Don't forget the `.skip-link`!
          </p>
        </section>
        <section className="container">
          <h2>Modern CSS Under the Spotlight</h2>
          <p>
            Modern CSS has increased and improved the available CSS properties
            and layout behaviors, and browser support is nearly in sync for most
            high-touch features.
          </p>
          <p>Some examples of modern CSS include:</p>
          <ul>
            <li>Flexbox</li>
            <li>Grid</li>
            <li>custom variables</li>
            <li>@supports()</li>
            <li>gradients</li>
            <li>animation</li>
            <li>3D transforms</li>
            <li>object-fit</li>
            <li>:focus-within</li>
            <li>calc()</li>
            <li>min() / max() / clamp()</li>
            <li>viewport units</li>
            <li>scroll-(margin/padding/snap)</li>
            <li>position: sticky</li>
            <li>two-value display</li>
            <li>expanded media query values</li>
            <li>variable fonts</li>
          </ul>
          <p>
            We also collectively have an improved understanding of what it takes
            to make accessible experiences.
          </p>
          <p>
            <a href="#contribute">Join Style Stage as a contributor</a> to
            refresh your CSS skills, and learn from others!
          </p>
        </section>
      </article>
    </>
  );
}
