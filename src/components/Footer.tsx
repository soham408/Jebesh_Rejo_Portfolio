function Footer() {
  return (
    <footer className="bg-[#d6d0bf] text-black-400 py-12 pl-[100px]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4 font-serif">About Us</h2>
          <p className="mb-4 font-serif">
          Vision and Mission <br />
          Royal Stunning Photography&apos;s vision and mission are centered 
          around creating timeless images that capture life&apos;s most special 
          moments, while providing an exceptional customer experience that 
          keeps clients coming back for more.
          </p>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4 font-serif">Quick Navigation</h2>
          <ul className="font-serif">
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/blogs"
                className="hover:text-white transition-colors duration-300"
              >
                Blogs
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li> */}
            {/* <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li> */}
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4 font-serif">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/jebesh-rejo-70956a22b/"
              className="hover:text-white transition-colors duration-300 w-6 h-6"
            >
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1d52af" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              
            </a>
            <a
              href="https://x.com/Jebesh_Rejo"
              className="hover:text-white transition-colors duration-300 w-6 h-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
              
            </a>
            <a
              href="https://www.instagram.com/studio__r20/"
              className="hover:text-white transition-colors duration-300 w-6 h-6"
            >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d2374f" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg>
              
            </a>

            <a
              href="https://www.youtube.com/channel/UC-1f2Ad1cqbEDEtlbONZDsw"
              className="hover:text-white transition-colors duration-300 w-8 h-7 scale-125"
            >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#db1432" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
              
            </a>
          </div>
        </div>
        <div className="font-serif">
          <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
          {/* <p>New Delhi, India</p>
          <p>Delhi 10001</p> */}
          <p>Email: royalstunningphotography@gmail.com</p>
          <p>Phone: (+91) 8454004454</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2025 StudioR20. All rights reserved.</p>
    </footer>
  )
}

export default Footer