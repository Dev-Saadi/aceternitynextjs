"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, // Location icon
  Mail, // Email icon
  Phone, // Phone icon
  Clock, // Clock icon
  ArrowRight, // Arrow icon
  CheckCircle, // Success icon
  AlertTriangle, // Error icon
  Loader2, // Loading icon
} from "lucide-react";
import { cn } from "@/lib/utils"; // Utility for combining CSS classes (you might have this)

// Interface for the form data.  This defines the structure of the data we'll collect.
interface ContactFormValues {
  name: string; //  The name input field will store a string
  email: string; //  The email input field will store a string
  message: string; // The message input field will store a string
}

// Type for form errors.  This defines the structure of our error object.
// It can either be null (no errors) or an object where the keys are the
// field names (name, email, message) and the values are the error messages (strings).
type FormErrors = { [key in keyof ContactFormValues]?: string } | null;

// Type for form status.  This defines the possible states of our form.
type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactPage: React.FC = () => {
  // State variables using useState:
  // =================================
  // formValues:  This state variable holds the data that the user has entered into the form.
  //              It's an object with 'name', 'email', and 'message' properties.
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: "", // Initialize 'name' to an empty string
    email: "", // Initialize 'email' to an empty string
    message: "", // Initialize 'message' to an empty string
  });

  // formErrors:  This state variable holds any error messages for the form fields.
  //              It starts as null (meaning no errors).  If there are errors, it becomes an
  //              object where the keys are the field names ('name', 'email', 'message')
  //              and the values are the error messages (e.g., "Name is required").
  const [formErrors, setFormErrors] = useState<{
    [key in keyof ContactFormValues]?: string;
  }>({});

  // formStatus: This state variable holds the current status of the form.
  //             It can be one of four values:
  //             - 'idle':      The form is waiting for user input.
  //             - 'submitting': The form is being submitted (e.g., sending data to a server).
  //             - 'success':   The form was submitted successfully.
  //             - 'error':     There was an error submitting the form.
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  // Function to handle changes in the input fields.  This function is called
  // whenever the user types something into one of the input fields (name, email, message).
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Get the 'name' and 'value' of the input that changed.
    // e.target is the input element that triggered the event.
    // e.target.name is the name attribute of the input (e.g., "name", "email", "message").
    // e.target.value is the current value of the input.

    // Update the formValues state with the new value.  We use the spread operator (...)
    // to create a new object with the existing values, and then we override the value
    // for the input that changed (e.g., if the user typed in the 'name' field, we update
    // the 'name' property of the formValues object).
    setFormValues({ ...formValues, [name]: value });

    // Clear any existing error message for the changed field.  This improves the user
    // experience by removing the error message as soon as the user starts typing.
    if (formErrors?.[name]) {
      setFormErrors({ ...formErrors!, [name]: undefined });
    }
  };

  // Function to validate the form data.  This function checks if the form data is valid
  // before we try to submit it.  For example, it checks if the required fields are filled
  // and if the email address is in a valid format.
  const validateForm = (): FormErrors => {
    const errors: { [key in keyof ContactFormValues]?: string } = {}; // Object to store errors.
    // The keys of this object are the field names ('name', 'email', 'message'),
    // and the values are the error messages (e.g., "Name is required").

    // Check if the name field is empty.  We use .trim() to remove any leading/trailing
    // whitespace before checking if the string is empty.
    if (!formValues.name.trim()) {
      errors.name = "Name is required"; // Add an error message to the 'errors' object.
    }

    // Check if the email field is empty.
    if (!formValues.email.trim()) {
      errors.email = "Email is required"; // Add an error message.
    }
    // Check if the email is valid.  We use a regular expression (regex) to check if the
    // email address is in a valid format.  This regex is a simplified version, and
    // there are more complex regexes for more thorough email validation.
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address"; // Add an error message.
    }

    // Check if the message field is empty.
    if (!formValues.message.trim()) {
      errors.message = "Message is required"; // Add an error message.
    }

    // If there are any errors, return the 'errors' object.
    if (Object.keys(errors).length > 0) {
      return errors;
    }

    // If there are no errors, return null.
    return null;
  };

  // Function to handle form submission.  This function is called when the user clicks the
  // "Send Message" button.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior.  When a user
    // submits a form, the browser normally reloads the page.  We call
    // e.preventDefault() to prevent this from happening, so we can handle the
    // submission with JavaScript.

    const errors = validateForm(); // Validate the form data by calling the validateForm() function.
    if (errors) {
      // If there are errors (i.e., validateForm() returned an object with error messages),
      // update the formErrors state with the errors object, and set the formStatus to 'error'.
      setFormErrors(errors);
      setFormStatus("error");
      return; // Stop the submission process.  We don't want to try to send invalid data.
    }

    setFormStatus("submitting"); // Set the formStatus to 'submitting' to indicate that we're
    // currently sending the data.  This can be used to display a loading indicator.
    setFormErrors(null); // Clear any previous errors.  We do this here in case the user
    // previously submitted the form with errors, and then fixed the errors
    // and submitted again.

    // Simulate an API call (replace with your actual submission logic).  In a real application,
    // you would use a library like 'fetch' or 'axios' to send the data to a server.
    try {
      // Simulate a delay of 2 seconds using a Promise and setTimeout.  This is just for
      // demonstration purposes, to show the 'submitting' state.
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, you would send the form data to a server here.  For example:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formValues),
      //   headers: { 'Content-Type': 'application/json' }
      // })
      // .then(response => response.json())
      // .then(data => { ... })

      console.log("Form Data:", formValues); // Log the form data to the console.  This is just
      // for demonstration and debugging.  You would remove this in a real application.

      setFormStatus("success"); // Set the formStatus to 'success' to indicate that the form
      // was submitted successfully.  This can be used to display a success message.
      setFormValues({ name: "", email: "", message: "" }); // Reset the form values to clear the form.
    } catch (error) {
      // If there was an error submitting the form (e.g., the server returned an error),
      // set the formStatus to 'error'.
      setFormStatus("error");
      console.error("Form submission failed:", error); // Log the error to the console.
      // Optionally set a generic error message to display to the user.
      // setFormErrors({ message: 'An error occurred. Please try again.' });
    }
  };

  // Animation variants for Framer Motion.  These are used to define animations for
  // the different sections of the page.
  const contactInfoVariants = {
    hidden: { opacity: 0, x: -20 }, // Start with 0 opacity and move 20 pixels to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    }, // Animate to 1 opacity and 0 x position
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 }, // Start with 0 opacity and move 20 pixels down
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.3 },
    }, // Animate to 1 opacity and 0 y position with a delay
  };

  const statusMessageVariants = {
    initial: { opacity: 0, height: 0 }, // Start with 0 opacity and 0 height
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3 } }, // Animate to 1 opacity and auto height
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } }, // Animate to 0 opacity and 0 height
  };

  // Render the Contact Page component.  This is what gets displayed on the page.
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl">
            We&apos;d love to hear from you! Please use the form below or reach
            out via the contact details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <motion.div
            variants={contactInfoVariants} // Apply the animation variants defined above
            initial="hidden" // Start with the 'hidden' state
            animate="visible" // Animate to the 'visible' state when the component mounts
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <p className="text-gray-200">
                    1234 Innovation Way, Suite 100
                    <br />
                    New York, NY 10001, USA
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-200">support@alwayson.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-200">+1 (800) 123-4567</p>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-200">
                    Mon - Fri: 9:00 AM – 5:00 PM (EST)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            variants={formVariants} // Apply the animation variants
            initial="hidden"
            animate="visible"
            className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formValues.name} // Bind the input's value to the 'name' property of the formValues state
                  onChange={handleChange} // Call handleChange when the input value changes
                  placeholder="Your Name"
                  className={cn(
                    "mt-1 w-full px-4 py-2 bg-black/20 text-white border border-gray-700 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors?.name &&
                      "border-red-500 focus:ring-red-500 focus:border-red-500" // Apply red border if there's an error
                  )}
                  disabled={formStatus === "submitting"} // Disable the input while submitting
                />
                {formErrors?.name && (
                  <p className="mt-1 text-xs text-red-500">{formErrors.name}</p> // Display error message
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={cn(
                    "mt-1 w-full px-4 py-2 bg-black/20 text-white border border-gray-700 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    formErrors?.email &&
                      "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  disabled={formStatus === "submitting"}
                />
                {formErrors?.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className={cn(
                    "mt-1 w-full px-4 py-2 bg-black/20 text-white border border-gray-700 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
                    formErrors?.message &&
                      "border-red-500 focus:ring-red-500 focus:border-red-500"
                  )}
                  disabled={formStatus === "submitting"}
                />
                {formErrors?.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {formErrors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={cn(
                  "w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors duration-300",
                  "disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                )}
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  variants={statusMessageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mt-6 bg-green-500/20 text-green-400 p-4 rounded-md flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p>Your message has been sent successfully!</p>
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  variants={statusMessageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="mt-6 bg-red-500/20 text-red-400 p-4 rounded-md flex items-center gap-3"
                >
                  <AlertTriangle className="w-5 h-5" />
                  <p>
                    {formErrors?.message ||
                      formErrors?.email ||
                      formErrors?.name ||
                      "An error occurred. Please try again."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
