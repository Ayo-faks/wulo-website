export default function Timeline() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Bringing the world's ideas to life
            </h2>
            <p className="text-lg text-indigo-200/65">
              We were frustrated because content tools hadn't innovated, so we
              sat down and drew up what we thought a new product could look
              like.
            </p>
          </div>
          {/* Items */}
          <div
            className="-my-4 mx-auto max-w-3xl md:-my-6"
            data-aos-id-timeline=""
          >
            {/* 1st item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  The seed
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2016
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Open PRO was founded in Milan, Italy
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>
            {/* 2nd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  New features
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2019
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Launched the first Open PRO Advanced plan
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>
            {/* 3rd item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Pivoting
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2022
                  </div>
                  <div
                    className="absolute left-0 ml-20 h-full -translate-x-1/2 translate-y-3 transform self-start bg-gray-800 px-px"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    Transitioned to a SaaS business model
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>
            {/* 4th item */}
            <div
              className="relative py-4 pl-24 md:py-6"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-anchor="[data-aos-id-timeline]"
            >
              <div className="pl-2">
                <div className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text pb-2 text-transparent">
                  Huge milestone
                </div>
                <div className="mb-2 flex items-center">
                  <div className="absolute left-0 inline-flex rounded-full bg-indigo-500/25 px-2.5 py-0.5 text-sm font-semibold text-indigo-500">
                    2026
                  </div>
                  <div
                    className="absolute left-0 ml-20 box-content h-2 w-2 -translate-x-1/2 transform rounded-full border-4 border-gray-950 bg-indigo-500"
                    aria-hidden="true"
                  />
                  <h4 className="font-nacelle text-xl font-semibold text-gray-200">
                    1 million happy customers
                  </h4>
                </div>
                <p className="text-[1rem] text-indigo-200/65">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa
                  massa. Adipiscing enim eu neque aliquam vestibulum morbi
                  blandit cursus risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
