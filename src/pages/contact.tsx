import React, {useState} from 'react';
import { useStateContext } from '../context/StateContext';
import Head from 'next/head';
import Link from 'next/link';
import { useFormik } from 'formik';
import Layout from '@/components/layout/Layout';
import { contactSchema } from '@/validation/validation';
import axios from 'axios';
import Spinner from '@/components/Spinner';
const Contact = () => {
  const { theme } = useStateContext();
  const [loading, setLoading] = useState(false)
  // const [status, setStatus] = useState('')
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      note: '',
    },
    validationSchema: contactSchema,
    onSubmit,
  });

  function onSubmit(values:object, action:any) {
    setLoading(true)
    axios
    .post('/api/mail', values)
    .then((res) => {
      setLoading(false)
    })
    .catch((err) => {

    })
    
    action.resetForm();
  }


  return (
    <>
      <Head>
        <title>Luis Gonzalez | Contact</title>
        <meta name="description" content="Get in touch with me and let's discuss how I can help you achieve your business objectives. I'm always happy to hear from you!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div
          className={`${
            theme === 'light' ? 'bg-white' : 'bg-[#282A3A] text-white'
          } flex flex-col justify-center space-y-3 py-16 w-[1400px] max-w-full px-4 m-auto`}
        >
          <div className="m-auto mb-12 ">
            <div className="relative w-fit py-2 m-auto mb-4">
              <h1 className="">Get in touch</h1>
              <span
                className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
                style={{ width: '50%' }}
              ></span>
            </div>
            <p className="text-lg text-center">
              If you have any questions or just want to say hello, please feel
              free to drop me a message anytime. I&apos;d love to hear from you!
            </p>
          </div>
          <div className=" m-auto flex flex-col justify-center items-center w-full">
            <div className="text-center space-y-2 m-auto mb-4">
              <Link
                className="font-medium text-lg text-blue_color"
                href="mailto:luisdev@luisgonzalezdev.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                luisdev@luisgonzalezdev.org
              </Link>
              <p>-- OR --</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[700px] max-w-full border-2 border-orange_color px-4 py-6 rounded-xl"
            >
              <label className="after:content-['*'] after:text-[#EB4747]">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded h-10 px-4 text-black mb-4 border-[2px]"
              />
              {touched.fullName && errors.fullName ? (
                <p className="text-red-500 font-extralight mb-4">
                  {errors.fullName}
                </p>
              ) : null}
              <label className="after:content-['*'] after:text-[#EB4747]">Email:</label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded h-10 px-4 text-black mb-4 border-[2px]"
              />
              {touched.email && errors.email ? (
                <p className="text-red-500 font-extralight mb-4">{errors.email}</p>
              ) : null}
              <label>Any Note?:</label>
              <textarea
                name="note"
                value={values.note}
                onChange={handleChange}
                onBlur={handleBlur}
                className="rounded h-8 mb-4 text-black p-2 min-h-[5rem] border-[2px]"
              />
              {touched.note && errors.note ? (
                <p className="text-red-500 font-extralight mb-4">
                  {errors.note}
                </p>
              ) : null}
              <div className="w-full flex justify-end">
                <button className="bg-orange_color w-full md:w-1/2 h-10 rounded text-white flex justify-center items-center">
                  {loading ? <Spinner/> : 'Send'}
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
