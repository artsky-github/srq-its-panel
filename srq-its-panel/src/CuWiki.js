import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";

function CommonUseWiki({ openWiki }) {
  return (
    <>
      <Container className="mt-5">
        <Fade in={openWiki} unmountOnExit>
          <div id="wiki-fade">
            <h2 className="text-center text-success">Common Use Wiki</h2>
            {/*<iframe
              id="iframe-dep"
              title="aerocloud-dep-arr"
              className="border border-2 rounded-3 border-success"
              src=""
  ></iframe>*/}

            <iframe
              src="https://smairport-my.sharepoint.com/personal/arthur_levitsky_srq-airport_com/_layouts/15/Doc.aspx?sourcedoc={bebc5762-ba93-44b2-8de4-e1eaf967b514}&amp;action=embedview"
              width="476px"
              height="288px"
              frameborder="0"
            >
              This is an embedded{" "}
              <a target="_blank" href="https://office.com">
                Microsoft Office
              </a>{" "}
              document, powered by{" "}
              <a target="_blank" href="https://office.com/webapps">
                Office
              </a>
              .
            </iframe>
          </div>
        </Fade>
      </Container>
    </>
  );
}

export default CommonUseWiki;
