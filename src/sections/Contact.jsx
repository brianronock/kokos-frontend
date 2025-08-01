// // src/sections/Contact.jsx
// import { useState, useRef } from 'react';

// export default function Contact({ id }) {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     schoolName: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [toast, setToast] = useState({ show: false, message: '', type: '' });
//   const formTopRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setToast({ show: false, message: '', type: '' });

//     try {
//       const response = await fetch('https://formspree.io/f/xkgbkdar', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         setSuccess(true);
//         showToast('Your message was sent successfully!', 'success');
//         scrollToTop();
//       } else {
//         showToast('Something went wrong. Please try again.', 'error');
//       }
//     } catch (e) {
//       showToast('Network error. Please try again later.', e);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const showToast = (message, type) => {
//     setToast({ show: true, message, type });
//     setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
//   };

//   const scrollToTop = () => {
//     if (formTopRef.current) {
//       const navbarHeight = document.querySelector('.navBar')?.offsetHeight || 80;
//       const top = formTopRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
//       window.scrollTo({ top, behavior: 'smooth' });
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setForm((prev) => ({ ...prev, [id]: value }));
//   };

//   return (
//     <section id={id} className="contact-section">
//       <div className="container">
//         <div className="section-header center">
//           <h2 className="f-xl f-bold">Get In Touch</h2>
//           <p className="f-normal">Ready to transform education at your school? Send us a message today.</p>
//         </div>

//         <div className={`toast ${toast.type} ${toast.show ? 'fade-enter-active' : ''}`}>
//           {toast.message}
//         </div>

//         <div className="contact-content" ref={formTopRef}>
//           {!success && (
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="firstName" className="f-1">First Name</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     className="form-control f-1"
//                     value={form.firstName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="lastName" className="f-1">Last Name</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     className="form-control f-1"
//                     value={form.lastName}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email" className="f-1">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-control f-1"
//                   value={form.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="schoolName" className="f-1">School Name</label>
//                 <input
//                   type="text"
//                   id="schoolName"
//                   className="form-control f-1"
//                   value={form.schoolName}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message" className="f-1">Message</label>
//                 <textarea
//                   id="message"
//                   className="form-control f-1"
//                   rows="5"
//                   value={form.message}
//                   onChange={handleInputChange}
//                   required
//                 ></textarea>
//               </div>

//               <button type="submit" className="btn primaryBtn f-1" disabled={isSubmitting || success}>
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from 'react';
import FormField from '../components/FormField';
import { submitForm } from '../utilities/submitForm';
import { scrollToElement } from '../utilities/scrollToElement';

export default function Contact({ id }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const formTopRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await submitForm({
      endpoint: 'https://formspree.io/f/xkgbkdar',
      formData: form,
      setIsSubmitting,
      setSuccess,
      showToast: (toastState) => {
        setToast(toastState);
        setTimeout(() => setToast({ show: false, message: '', type: '' }), 4000);
      },
    });
    if (success) {
      scrollToElement(formTopRef);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id={id} className="contact-section">
      <div className="container">
        <div className="section-header center">
          <h2 className="f-xl f-bold">Get In Touch</h2>
          <p className="f-normal">Ready to transform education at your school? Send us a message today.</p>
        </div>

        <div className={`toast ${toast.type} ${toast.show ? 'fade-enter-active' : ''}`}>
          {toast.message}
        </div>

        <div className="contact-content" ref={formTopRef}>
          {!success && (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <FormField
                  id="firstName"
                  label="First Name"
                  value={form.firstName}
                  onChange={handleInputChange}
                  required
                />
                <FormField
                  id="lastName"
                  label="Last Name"
                  value={form.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <FormField
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={handleInputChange}
                required
              />

              <FormField
                id="schoolName"
                label="School Name"
                value={form.schoolName}
                onChange={handleInputChange}
                required
              />

              <FormField
                id="message"
                label="Message"
                type="textarea"
                value={form.message}
                onChange={handleInputChange}
                required
                rows={5}
              />

              <button type="submit" className="btn primaryBtn f-1" disabled={isSubmitting || success}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}