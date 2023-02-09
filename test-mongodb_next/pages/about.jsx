import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <div class="bg-white w-auto md:my-4">
        <section class="py-4 mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <p class="text-gray-900 text-2xl m-4 mt-8">
            As a software developer with intrinsic passion and interest in
            women's and LGBTIQ+ human rights, I believe in technology as a tool
            for self-expression, deconstructing partiarchy and social change in
            general. As a queer person, I have experienced or witnessed most of
            the microagressions and therefore decided to use my tech skills to
            build a dedicated platform with the purpose of unlearning harmful
            behaviour toward queer community. This platform was build with a
            mission to help people learn about microaggressions without fear of
            judgement.{" "}
          </p>
        </section>
        <p class="text-gray-900 text-2xl m-4 mt-8 pb-8">
          "That's so gay!" was heavily inspired by{" "}
          <a href="https://www.themicropedia.org" class="underline">
            {" "}
            the Micropedia,{" "}
          </a>
          the first encyclopedia of microagressions. I appreciate any feedback
          and suggestions on experienced microagressions, especially from the
          perspectives of the queer and other marginalized communities. Feel
          free contact me with any questions, feedback or suggestions.
        </p>
      </div>
    </>
  );
}
export default About;
