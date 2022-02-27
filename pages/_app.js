import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import { Container, Nav } from "react-bootstrap";
import { Row } from "react-bootstrap";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>{" "}
      <NavBar></NavBar>
      <Container fluid>
          <Row>
            <Component {...pageProps} />
          </Row>
      </Container>
    </>
  );
}
// Adding
export default MyApp;
