import logo from "../assets/images/logo.png";
export default function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
   <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
  <div className="max-w-6xl mx-auto px-4 py-8 text-center">

    {/* Company Logo */}
    <img
  src={logo}
  alt="Al Qari Tours Travel"
  className="mx-auto h-20 w-auto"
/>

<h3 className="mt-3 text-xl font-bold text-emerald-800">
  Al Qari Tours Travel
</h3>
        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Al Qari Tours Travel (Pvt.) Ltd. All rights reserved.
        </p>

        {/* Developer Credit */}
        <div className="mt-4 border-t border-gray-300 pt-4">
          <p className="text-sm text-gray-600">
            Website Designed & Developed by{" "}
            <a
              href="https://wa.me/923066335448"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
            >
              Daniyal Siddiqui
            </a>
          </p>

          <div className="mt-2 flex justify-center gap-6 text-sm">
            <a
              href="https://wa.me/923066335448"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600"
            >
              📱 WhatsApp
            </a>

            <a
              href="mailto:daniyalsiddiquics@gmail.com"
              className="text-gray-600 hover:text-blue-600"
            >
              📧 Email
            </a>

            <a
              href="https://www.linkedin.com/in/daniyal-siddiqui-71a06a321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              🌐 LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}