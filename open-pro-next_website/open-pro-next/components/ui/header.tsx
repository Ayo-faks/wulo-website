// "use client";

// import Link from "next/link";
// import Logo from "./logo";
// import Dropdown from "@/components/dropdown";
// import MobileMenu from "./mobile-menu";

// export default function Header() {
//   return (
//     <header className="z-30 mt-2 w-full md:mt-5">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
//           {/* Site branding */}
//           <div className="flex flex-1 items-center">
//             <Logo />
//           </div>

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex md:grow">
//             {/* Desktop menu links */}
//             <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
//               <li>
//                 <Link
//                   href="/pricing"
//                   className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
//                 >
//                   Pricing
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about"
//                   className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/blog"
//                   className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/help/frequently-asked-questions"
//                   className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
//                 >
//                   Help Centre
//                 </Link>
//               </li>
//               {/* 1st level: hover */}
//               <Dropdown title="Resources">
//                 {/* 2nd level: hover */}
//                 <li>
//                   <Link
//                     href="/newsletter"
//                     className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
//                   >
//                     Newsletter
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/404"
//                     className="flex rounded-lg px-2 py-1.5 text-sm text-white hover:text-indigo-500"
//                   >
//                     404
//                   </Link>
//                 </li>
//               </Dropdown>
//             </ul>
//           </nav>

//           {/* Desktop sign in links */}
//           <ul className="flex flex-1 items-center justify-end gap-3">
//             <li>
//               <Link
//                 href="/signin"
//                 className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
//               >
//                 Sign In
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/signup"
//                 className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
//               >
//                 Register
//               </Link>
//             </li>
//           </ul>

//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <Link
                  href="/newsletter"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Waitlist
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Contact Us
                </Link>
              </li>
              {/* Commented out other links */}
              {/* 
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help/frequently-asked-questions"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Help Centre
                </Link>
              </li> 
              */}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            {/* Commented out sign in and register links */}
            {/* 
            <li>
              <Link
                href="/signin"
                className="btn-sm relative bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] py-[5px] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask-linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
              >
                Register
              </Link>
            </li> 
            */}
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}