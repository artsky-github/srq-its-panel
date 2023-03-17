import Container from "react-bootstrap/Container";
import Fade from "react-bootstrap/Fade";

function commonUseWiki({openWiki}) {
    return (
        <>
            <Fade in = {openWiki} unmountOnExit>
            </Fade>
        </>
    );
}

export default commonUseWiki;