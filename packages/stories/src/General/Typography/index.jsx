import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <h1 className="title">Typography Styles</h1>
    <h2 className="title">Headings</h2>
    <section className="example">
      <h1>Heading 1</h1>
    </section>
    <section className="example">
      <h1 className="reversed">Heading 1 Reversed</h1>
    </section>
    <section className="example">
      <h1 className="t1">Heading 1 Title</h1>
    </section>
    <section className="example">
      <h2>Heading 2</h2>
    </section>
    <section className="example">
      <h2 className="reversed">Heading 2 Reversed</h2>
    </section>
    <section className="example">
      <h2 className="small">Heading 2 Small</h2>
    </section>
    <section className="example">
      <h3>Heading 3</h3>
    </section>
    <section className="example">
      <h3 className="reversed">Heading 3 Reversed</h3>
    </section>
    <section className="example">
      <h4>Heading 4</h4>
    </section>
    <section className="example">
      <h4 className="reversed">Heading 4 Reversed</h4>
    </section>
    <section className="example">
      <h5>Heading 5</h5>
    </section>
    <section className="example">
      <h6>Heading 6</h6>
    </section>
    <h3 className="title">Paragraph</h3>
    <section className="example">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem quis leo pretium ullamcorper a sit amet urna. Donec placerat vestibulum mollis. Proin ornare risus magna, nec ullamcorper elit venenatis eget.</p>

      <p>Nunc varius libero lorem, ut aliquam odio luctus sit amet. Nunc commodo nisl neque, congue consectetur ante pellentesque at. Aliquam erat volutpat. Proin venenatis, lorem eu malesuada dictum, ipsum metus tincidunt nisl, sed porttitor orci ligula eget nunc. Duis pulvinar mauris at nunc dictum, sit amet tempor leo accumsan.</p>
    </section>
    <h3 className="title">Lists</h3>
    <section className="example">
      <ol>
        <li>Ordered Item 1</li>
        <li>Ordered Item 2</li>
        <ol>
          <li>
            Nested Item 1
          </li>
        </ol>
      </ol>
      <ul>
        <li>Unordered Item 1</li>
        <li>Unordered Item 2</li>
        <ul>
          <li>
            Nested Item 1
          </li>
        </ul>
      </ul>
    </section>
    <h3 className="title">Blockquote</h3>
    <section className="example">
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem quis leo pretium ullamcorper a sit amet urna. Donec placerat vestibulum mollis. Proin ornare risus magna, nec ullamcorper elit venenatis eget.
      </blockquote>
    </section>
  </Fragment>
);
