import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// 3. შექმენით ვალიდაციის სქემა Yup-ის გამოყენებით
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან')
    .required('სახელის მითითება სავალდებულოა'),
  email: Yup.string()
    .email('არასწორი ელ-ფოსტის ფორმატი')
    .required('ელ-ფოსტის მითითება სავალდებულოა'),
});

export default function App() {
  // 4. გამოიყენეთ useFormik Hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema,
    // 6. დაამუშავეთ Formik-ის მონაცემები
    onSubmit: (values, { resetForm }) => {
      alert(`ფორმის მონაცემები წარმატებით გაიგზავნა:\nსახელი: ${values.name}\nელ-ფოსტა: ${values.email}`);
      resetForm();
    },
  });

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Formik & Yup ფორმის ვალიდაცია (დავალება 6)</h2>

      <form onSubmit={formik.handleSubmit}>
        {/* 5. დააკავშირეთ ფორმის ველები */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>სახელი:</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%', padding: '8px' }}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>ელ-ფოსტა:</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '100%', padding: '8px' }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <button type="submit" style={{ padding: '10px 15px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          გაგზავნა
        </button>
      </form>
    </div>
  );
}