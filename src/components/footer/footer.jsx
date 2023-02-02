import React  from "react"

export const Footer = () => {
    return (
        <>
        <footer className="bg-purple sticky top-100vh p-4 sm:p-6 dark:bg-gray-900">
        <div className="m-auto md:p-6 md:flex max-w-7xl justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src="./img/tsg3.png" className="w-20 h-20 mx-2" alt="" />
              <span className="self-center text-2xl text-lime whitespace-nowrap">
                That's so gay!
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-900 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.themicropedia.org/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Micropedia
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/anaURL/microagressions-mongoose-crud"
                    target="_blank"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul className="text-gray-900 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://twitter.com/ana_esplanada"
                    className="hover:underline"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anaurlic/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-900 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
            </ul>
            </div>
            </div>
            </div>
            </footer>
            </>

    );
}
