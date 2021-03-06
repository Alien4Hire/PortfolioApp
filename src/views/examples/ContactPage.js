import React from 'react';
import {
    Container,
    Row,
    Col,
    CardBody,
    Input,
    Card,
    CardTitle,
    Form,
    FormGroup,
    Button,
    Label,
} from 'reactstrap';
import ColorNavbar from '../../components/Navbars/ColorNavbar'

const ConstantContact = () => {


    return (
        <>
        <ColorNavbar />
        <div className="wrapper section section-dark">
        <div
          className="page-header section-dark"
          // style={{
          //   backgroundImage:
          //     "url(" + require("assets/img/sections/pk-pro-cover.jpg") + ")",
          // }}
        >
        <Container className="contact-container">
            <Row>
            <Col className="ml-auto mr-auto" md="10">
                <Card className="card-contact no-transition">
                <CardTitle className="text-center" tag="h3">
                    Contact Me
                </CardTitle>
                <Row>
                    <Col className="ml-auto" md="5">
                    <CardBody>
                        <div className="info info-horizontal">
                        <div className="icon icon-info">
                            <i className="nc-icon nc-pin-3" />
                        </div>
                        <div className="description-contact">
                            <h4 className="info-titles">
                            Find Me online
                            </h4>
                            <p className="description-description">
                            You found me once, but check<br />
                            out my freelance services available<br />
                            on <a href="">Upwork</a>
                            </p>
                        </div>
                        </div>
                        <div className="info info-horizontal">
                        <div className="icon icon-danger">
                            <i className="nc-icon nc-badge" />
                        </div>
                        <div className="description-contact">
                            <h4 className="info-titles">Give me a ring</h4>
                            <p className="description-description">
                            Jason Maynard <br />
                            740-975-3508 <br />
                            Mon - Fri, 8a-10p
                            </p>
                        </div>
                        </div>
                    </CardBody>
                    </Col>
                    <Col className="mr-auto" md="5">
                    <Form id="contact-form" method="post" role="form">
                        <CardBody>
                        <Row>
                            <Col md="6">
                            <FormGroup className="label-floating">
                                <label className="control-label">
                                First name
                                </label>
                                <Input
                                name="name"
                                placeholder="First Name"
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                            <Col md="6">
                            <FormGroup className="label-floating">
                                <label className="control-label">
                                Last name
                                </label>
                                <Input
                                name="name"
                                placeholder="Last Name"
                                type="text"
                                />
                            </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="label-floating">
                            <label className="control-label">
                            Email address
                            </label>
                            <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            />
                        </FormGroup>
                        <FormGroup className="label-floating">
                            <label className="control-label">
                            Your message
                            </label>
                            <Input
                            id="message"
                            name="message"
                            placeholder="Message"
                            type="textarea"
                            rows="6"
                            />
                        </FormGroup>
                        <Row>
                            <Col md="6">
                            <FormGroup check>
                                <Label check>
                                <Input defaultValue="" type="checkbox" />
                                I'm not a robot !{" "}
                                <span className="form-check-sign" />
                                </Label>
                            </FormGroup>
                            </Col>
                            <Col md="6">
                            <Button
                                className="pull-right"
                                color="primary"
                                type="submit"
                            >
                                Send Message
                            </Button>
                            </Col>
                        </Row>
                        </CardBody>
                    </Form>
                    </Col>
                </Row>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
        </div>
        </>

    )
}

export default ConstantContact;