/** src/utils/submitForm.js
 * Submits a form to a specified endpoint (e.g., Formspree) and handles the response.
 * @param {Object} options - The options object containing submission details.
 * @param {string} options.endpoint - The Formspree URL (e.g., 'https://formspree.io/f/xkgbkdar').
 * @param {Object} options.formData - The form data object (e.g., { firstName, lastName, email, ... }).
 * @param {function} options.setIsSubmitting - State setter to toggle the submitting status.
 * @param {function} options.setSuccess - State setter to toggle the success status.
 * @param {function} options.showToast - Function to display toast messages (e.g., { show, message, type }).
 * @returns {Promise<boolean>} A promise that resolves to `true` if successful, `false` otherwise.
 */
export async function submitForm({
  endpoint,
  formData,
  setIsSubmitting,
  setSuccess,
  showToast,
}) {
  setIsSubmitting(true);
  showToast({ show: false, message: '', type: '' });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      showToast({ show: true, message: 'Your message was sent successfully!', type: 'success' });
      return true;
    } else {
      showToast({ show: true, message: 'Something went wrong. Please try again.', type: 'error' });
      return false;
    }
  } catch (e) {
    showToast({ show: true, message: 'Network error. Please try again later.', type: 'error' });
    console.error("Submit Error:", e);
    return false;
  } finally {
    setIsSubmitting(false);
  }
}