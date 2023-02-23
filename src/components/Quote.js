import design from './design/Quote.css';

const Quote = () => (
  <div className={design.quoteDiv}>
    <h2 className={design.quote}>
      Mathematics is not about numbers, equations,
      compulations or algorithms. It is about understanding.
      <p>--Wiliam Paul Thurston</p>
    </h2>
  </div>
);

export default Quote;
