/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import design from './design/Quote.css';

const Quote = () => (
  <div className={design.quoteDiv}>
    {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
    <h2 className={design.quote}>
      {/* // eslint-disable-next-line max-len */}
      Mathematics is not about numbers, equations, compulations or algorithms. It is about understanding.

      <p>--Wiliam Paul Thurston</p>
    </h2>
  </div>
);

export default Quote;
