import React from "react";
import { Container, Footer } from "mdbreact";
import './FooterApp.css'

export class FooterApp extends React.Component {
    render() {
        return (
            <Footer color="blue" className="footer font-small pt-4 mt-4">
                <div className="footer-copyright text-center py-3">
                    <Container fluid className="copyright">
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}