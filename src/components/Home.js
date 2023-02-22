/* eslint-disable max-len */
// import design from '../design/Home.css';
// eslint-disable-next-line import/extensions
import design from './design/Home.css';

const Home = () => (
  <div className={design.homeContainer}>
    <h2 className={design.homeTitle}>Welcome to my Math Magicians website!</h2>
    <div className={design.homeParagraphs}>
      <p className={design.paragraphOne}>
        I would not dare to say that there is a direct relation between mathematics and madness, but there is no doubt that great mathematicians suffer from maniacal characteristics, delirium and symptoms of schizophrenia.
      </p>
      <p className={design.paragraphTwo}>
        Why are numbers beautiful? It’s like asking why is Beethoven’s Ninth Symphony beautiful. If you don’t see why, someone can’t tell you. I know numbers are beautiful. If they aren’t beautiful, nothing is.
      </p>
    </div>
  </div>
);
export default Home;
