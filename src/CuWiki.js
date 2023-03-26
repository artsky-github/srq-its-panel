import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";

function CommonUseWiki({ openWiki }) {
  return (
    <>
      <Container>
        <Fade in={openWiki} unmountOnExit>
          <div id="wiki-fade">
            <h2
              className="text-center text-success"
              style={{ marginBottom: "16px" }}
            >
              Common Use Wiki
            </h2>
            <div
              style={{ overflow: "hidden" }}
              className="border border-2 rounded-3 border-success"
            >
              <iframe
                src="https://smairport-my.sharepoint.com/personal/arthur_levitsky_srq-airport_com/_layouts/15/Doc.aspx?sourcedoc={bebc5762-ba93-44b2-8de4-e1eaf967b514}&amp;action=embedview&amp;wdEmbedCode=0&amp;wdPrint=0"
                style={{ position: "relative", left: "-1px", top: "-1px" }}
              ></iframe>
            </div>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default CommonUseWiki;
