"use client";

import Image from "next/image";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { saveUserMessage } from "@/actions/responses";
import { Locale } from "@/types/common";

type ContactUsProps = {
  lang: Locale;
  homeData: any;
  dictionary: any;
  tertiaryFont: any;
};

export default function ContactUs({
  homeData,
  dictionary,
  lang,
  tertiaryFont,
}: ContactUsProps) {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(200, "Too Long!")
      .required(dictionary.required),

    phone: Yup.string()
      .trim()
      .matches(new RegExp("^[0-9]{10}$"), dictionary.phoneErrorMessage),

    email: Yup.string().email("Invalid email").required(dictionary.required),

    message: Yup.string()
      .min(2, "Too Short!")
      .max(2000, "Too Long!")
      .required(dictionary.required),
  });

  return (
    <div className="min-h-[800px] bg-bg-sidebar py-10 sm:py-24 px-4 sm:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-7">
      <div className="w-[98%] h-[200px] sm:w-auto sm:h-auto col-start-1 col-end-3 relative ">
        <div className="absolute top-0 left-0 w-[98%] h-[200px] sm:w-[270px] sm:h-[350px] 2xl:w-[400px] 2xl:h-[516px] bg-bg-primary"></div>

        <div className="absolute top-2 left-2 xl:top-5 xl:left-5 w-[98%] h-[200px] sm:w-[270px] sm:h-[350px] 2xl:w-[400px] 2xl:h-[516px]">
          <Image
            alt="Red anthurium close up image"
            src={"/images/contact/Red-Giant-anthurium.JPG"}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(min-width: 650px) 270px, (min-width: 1536px) 400px, 100vw"
          />
        </div>
      </div>

      <div className="sm:col-start-2 sm:col-end-3 xl:col-start-3 xl:col-end-6  sm:min-h-[350px] xl:min-h-max">
        <div className="flex">
          <div
            id={homeData.contactUsTitle}
            className={`${tertiaryFont.className} text-2xl sm:text-4xl`}
          >
            {homeData.contactUsTitle}
          </div>
          <div className="hidden sm:block pl-2 text-xl font-extralight italic translate-y-4">
            {homeData.contactUsSubTitle}
          </div>
        </div>

        <div className="pl-1">
          <div
            className={`pt-6 pb-4 ${
              lang === Locale.en ? "text-base" : "text-xl"
            }`}
          >
            {homeData.contactUsDescripton}
          </div>
        </div>
      </div>

      <div className="col-start-1 col-end-3 xl:col-start-3 xl:col-end-6">
        <div className="pl-1">
          <div
            className={`pb-5 sm:py-5 ${lang === Locale.en ? "text-xl" : "text-2xl"}`}
          >
            {homeData.contactUsFormTitle}
          </div>
        </div>

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
              alert("Your message has been recorded");
            });
          }}
        >
          {({ values, handleBlur, handleChange, errors, touched }) => (
            <Form>
              <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                <div className="my-5"> 
                  <Field
                    className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                    name="name"
                    placeholder={dictionary.name}
                  />

                  {errors.name && touched.name ? (
                    <div className="pl-4 text-red-600 text-xs">
                      {errors.name}
                    </div>
                  ) : null}
                </div>

                <div className="my-5"> 
                  <Field
                    className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                    name="email"
                    type="email"
                    placeholder={dictionary.email}
                  />

                  {errors.email && touched.email ? (
                    <div className="pl-4 text-red-600 text-xs">
                      {errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="my-5"> 
                  <Field
                    className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                    name="phone"
                    placeholder={dictionary.phoneNumber}
                  />

                  {errors.phone && touched.phone ? (
                    <div className="pl-4 text-red-600 text-xs">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>

                <div className="my-5 col-span-2">
                  <textarea
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className="p-4 bg-bg-default w-full outline-none rounded border border-transparent focus:border-focus-primary "
                    name="message"
                    placeholder={dictionary.yourMessage}
                    rows={3}
                  />

                  {errors.message && touched.message ? (
                    <div className="pl-4 text-red-600 text-xs">
                      {errors.message}
                    </div>
                  ) : null}
                </div>

                <div className="col-start-2 col-end-3 flex justify-end">
                  <button
                    className="py-2 px-8 bg-btn-primary rounded hover:shadow-lg hover:shadow-red-200"
                    type="submit"
                  >
                    {dictionary.submit}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
