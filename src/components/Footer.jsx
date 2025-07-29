export default function Footer() {
  return (
    <footer className="bg-2 co-5 py-10 mt-10">
      <div className="boxCont text-center">
        <p className="fs-xs mb-2">&copy; {new Date().getFullYear()} FutureTech. All rights reserved.</p>
        <div className="space-x-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="fs-xs underline">
            Facebook
          </a>
          <a href="mailto:team@futuretechafrica.com" className="fs-xs underline">
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer className="footer bg-dark-blue text-white py-8">
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="flex items-center gap-2">
//           <img src="/images/logo11.svg" alt="FutureTech Logo" className="h-12 w-auto" />
//           <span className="font-bold text-lg">FutureTech</span>
//         </div>

//         <div className="text-sm text-center md:text-right">
//           <p>&copy; {new Date().getFullYear()} FutureTech. All rights reserved.</p>
//           <p className="opacity-70">Empowering learners through technology and AI.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
