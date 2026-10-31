/**
 * Splits heading text into words that rise out of a mask one after another.
 * The movement is CSS (see "Staged entrance" in App.css). Each line is its own
 * block on large screens and flows naturally on phones.
 *
 *   <h1 aria-label="Our Services"><SplitLines lines={["Our Services"]} /></h1>
 */
function SplitLines({ lines }) {
  let index = 0;

  return lines.map((line, lineNumber) => (
    <span className="split-line" aria-hidden="true" key={lineNumber}>
      {line.split(" ").map((word, wordNumber) => {
        const style = { "--w": index };
        index += 1;
        return (
          <span key={wordNumber}>
            <span className="w">
              <span style={style}>{word}</span>
            </span>{" "}
          </span>
        );
      })}
    </span>
  ));
}

export default SplitLines;
