import Fade from "react-bootstrap/Fade";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import radarApp from "./images/radar_app.svg";
import outlookApp from "./images/outlook_app.svg";
import teamsApp from "./images/teams_app.svg";
import sharepointApp from "./images/sharepoint_app.svg";
import excelApp from "./images/excel_app.svg";
import serviceDeskApp from "./images/sdp_app.svg";
import aeroSupportApp from "./images/ac_support_app.svg";
import adpApp from "./images/adp_app.svg";
import nassApp from "./images/nass_app.svg";

function MoreApps({ openApps }) {
  return (
    <>
      <Fade className="content-fill-page" in={openApps} unmountOnExit>
        <div id="apps-fade">
          <h2 className="text-center my-5" style={{ color: "#659C83" }}>
            ITS Apps
          </h2>
          <Row xs="2" md="4" className="mx-5 row-stackLeft-resize text-center">
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-itsapps app-links-hover"
                href="https://support.srq-airport.com/app/itdesk/HomePage.do"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Support App SVG"
                    src={serviceDeskApp}
                    width="80"
                    className="d-block m-auto"
                  ></img>
                </div>
                ServiceDesk Plus
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-itsapps app-links-hover"
                href="https://forms.clickup.com/f/4g04e-589/I8ERP7O74FRAP2SETT"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="ADP App SVG"
                    src={aeroSupportApp}
                    width="80"
                    className="d-block m-auto"
                  ></img>
                </div>
                AeroCloud Support
              </a>
            </Col>
          </Row>
          <h2 className="text-center my-5" style={{ color: "#275E44" }}>
            Microsoft Apps
          </h2>
          <Row xs="2" md="4" className="mx-5 row-stackLeft-resize text-center">
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-msapps app-links-hover"
                href="https://outlook.office365.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Outlook App SVG"
                    src={outlookApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Outlook
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-msapps app-links-hover"
                href="https://teams.microsoft.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Teams App SVG"
                    src={teamsApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Teams
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-msapps app-links-hover"
                href="https://smairport.sharepoint.com/sites/CommonUseIT"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="IT SharePoint App SVG"
                    src={sharepointApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                SharePoint
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-msapps app-links-hover"
                href="https://www.microsoft365.com/launch/excel?auth=2"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Excel App SVG"
                    src={excelApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                Excel
              </a>
            </Col>
          </Row>
          <h2 className="text-center my-5" style={{ color: "#447B62" }}>
            Additional Apps
          </h2>
          <Row xs="2" md="4" className="mx-5 row-stackLeft-resize text-center">
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-addapps app-links-hover"
                href="https://www.radarbox.com/airport/KSRQ"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="Radar App SVG"
                    src={radarApp}
                    width="80"
                    className="d-block m-auto"
                  />
                </div>
                RadarBox
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-addapps app-links-hover"
                href="https://nasstatus.faa.gov/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="NASS App SVG"
                    src={nassApp}
                    width="80"
                    className="d-block m-auto"
                  ></img>
                </div>
                NASS
              </a>
            </Col>
            <Col lg="2" className="mb-2 d-flex justify-content-center">
              <a
                className="d-block app-links-addapps app-links-hover"
                href="https://online.adp.com/signin/v1/?APPID=WFNPortal&productId=80e309c3-7085-bae1-e053-3505430b5495&returnURL=https://workforcenow.adp.com/&callingAppId=WFN&TARGET=-SM-https://workforcenow.adp.com/portal/theme"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-block app-link-anim">
                  <img
                    alt="ADP App SVG"
                    src={adpApp}
                    width="80"
                    className="d-block m-auto"
                  ></img>
                </div>
                ADP
              </a>
            </Col>
          </Row>
        </div>
      </Fade>
    </>
  );
}

export default MoreApps;
