"use client";

import Image from "next/image";
import TitleCard from "../TitleCard";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { saveUserMessage } from '../../actions/responses';

type ContactUsProps = {
  lang?: string;
  homeData: any;
}

export default function ContactUs({ homeData }: ContactUsProps) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),

    phone: Yup.string()
      .trim()
      .matches(new RegExp("^[0-9]{10}$"), "Please enter a valid phone number"),

    email: Yup.string().email("Invalid email").required("Required"),

    message: Yup.string()
      .min(2, "Too Short!")
      .max(2000, "Too Long!")
      .required("Required"),
  });

  return (
    <div className="min-h-[800px] py-24 px-20 grid grid-cols-5 gap-7">
      <div className="col-span-2 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[516px] bg-bg-primary"></div>

        <div className="absolute top-5 left-5 w-[400px] h-[516px]">
          <Image
            alt="contact-image"
            src={"/images/contact/anthurium-7.webp"}
            fill
          />
        </div>
      </div>

      <div className="col-span-3">
        <TitleCard title={homeData.contactUsTitle} subTitle={homeData.contactUsSubTitle} />

        <div className="pl-1">
          <div className="pt-6 pb-4">
            {homeData.contactUsDescripton}
          </div>

          <div className="py-5 text-xl">Drop us a message</div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              saveUserMessage(values).then(() => {
                alert('Message recorded');
              });
            }}
          >
            {({
              values,
              handleBlur,
              handleChange,
              errors,
              touched,
            }) => (
              <Form>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <Field
                      className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                      name="name"
                      placeholder="Name"
                    />

                    {errors.name && touched.name ? (
                      <div className="pl-4 text-red-600 text-xs">
                        {errors.name}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <Field
                      className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                      name="email"
                      type="email"
                      placeholder="Email"
                    />

                    {errors.email && touched.email ? (
                      <div className="pl-4 text-red-600 text-xs">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>

                  <div>
                    <Field
                      className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                      name="phone"
                      placeholder="Phone Number"
                    />

                    {errors.phone && touched.phone ? (
                      <div className="pl-4 text-red-600 text-xs">
                        {errors.phone}
                      </div>
                    ) : null}
                  </div>

                  <div className="col-span-2">
                    <textarea
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                      name="message"
                      placeholder="Your message"
                      rows={3}
                    />

                    {errors.message && touched.message ? (
                      <div className="pl-4 text-red-600 text-xs">
                        {errors.message}
                      </div>
                    ) : null}
                  </div>

                  <div className="col-start-2 col-end-3 flex justify-end">
                    <button className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
