import React from "react";
import { Form, Container, Row, Col, FormGroup, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().min(3, "Name must be longer than 3 characters.").required("Please enter your full name."),
    subject: yup.string().min(3, "Subject must be longer than 3 characters.").required("Please enter a subject."),
    email: yup.string().email("Please enter a valid email.").required("Please enter your email."),
    body: yup.string().min(3, "Message must be longer than 3 characters. ").required("Please enter your message."),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <h1 className="text-center">Contact Us</h1>
      <Row>
        <Col className=" col-6 col-xl-5 m-auto">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Form.Label>Full Name</Form.Label>
              <Form.Control {...register("fullName")} placeholder="Ola Nordmann" />
              <p>{errors.fullName?.message}</p>
            </FormGroup>
            <FormGroup>
              <Form.Label>Subject</Form.Label>
              <Form.Control {...register("subject")} />
              <p>{errors.subject?.message}</p>
            </FormGroup>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control {...register("email")} />
              <p>{errors.email?.message}</p>
            </FormGroup>
            <FormGroup>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" {...register("body")} />
              <p>{errors.body?.message}</p>
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
