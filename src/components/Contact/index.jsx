import React from "react";
import { Form, Container, Row } from "react-bootstrap";
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
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} />
          <p>{errors.fullName?.message}</p>
          <input {...register("subject")} />
          <p>{errors.subject?.message}</p>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
          <input {...register("body")} />
          <p>{errors.body?.message}</p>
          <input type="submit" />
        </Form>
      </Row>
    </Container>
  );
}

export default Contact;
