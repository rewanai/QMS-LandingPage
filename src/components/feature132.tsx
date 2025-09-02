"use client";

const itemsData = [
  {
    id: 1,
    title: "Real-Time Speech-to-Speech",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "We engineer solutions with advanced speech-to-speech technology, allowing your Cyber Employees to understand spoken commands and respond with natural, human-like voice. This is the engine for automating interactive customer service calls, internal IT helpdesks, and other voice-activated workflows for the Omani market and beyond.",
  },
  {
    id: 2,
    title: "AI-Powered Interactive 3D Models",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "We move beyond flat screens to create AI-driven, interactive 3D models that run directly in a web browser. This allows for immersive product demonstrations, complex virtual training for employees, and dynamic visualization of real estate or engineering data.",
  },
  {
    id: 3,
    title: "Dynamic & Interactive Web UI",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Effective automation requires a seamless bridge between human and digital workers. We design and build highly intuitive and interactive web interfaces, dashboards, and control panels that allow your team to assign tasks, monitor performance, and collaborate with their Cyber Employee counterparts in real time.",
  },
  {
    id: 4,
    title: "Retrieval-Augmented Generation (RAG) Systems",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "To ensure our AI provides answers grounded in your reality, we build with Retrieval-Augmented Generation (RAG). This advanced system allows a Cyber Employee to access your company’s private knowledge base—technical manuals, internal policies, past project data—to provide responses that are accurate..",
  },
];

const Feature132 = () => {
  return (
    <section className="py-32 bg-muted ">
      <div className="container">
        <h2 className="mb-6 text-center text-5xl font-semibold">
          The Building Blocks of Advanced Intelligence
        </h2>
        <p className="text-muted-foreground m-auto max-w-3xl text-center text-xl">
          Our rewan framework integrates a suite of state-of-the-art technologies, enabling us to build Cyber Employees and applications that can see, hear, talk, and reason with your business data.
        </p>
        <a
          className="border-muted bg-background hover:border-muted-foreground mx-auto mt-8 block w-fit rounded-full border-2 px-6 py-4 text-sm font-semibold transition"
          href="#"
        >
          Get Started
        </a>
        <div className="mx-auto mt-16 flex flex-col gap-6 md:flex-row">
          {itemsData.map((item) => (
            <a className="block " href="#" key={item.id}>
              <img
                src={item.imageSrc}
                alt="placeholder"
                className="mb-6 h-full max-h-72 w-full rounded-2xl object-cover transition hover:brightness-90 lg:max-h-96"
              />
              <h6 className="mb-3 text-lg font-semibold">{item.title}</h6>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature132 };
