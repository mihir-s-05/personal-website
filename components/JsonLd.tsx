// components/JsonLd.tsx
export default function JsonLd() {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mihir Srivastava",
            url: "https://mihirsrivastava.tech",
            sameAs: [
              "https://github.com/mihir-s-05",
              "https://linkedin.com/in/mihir-srivastava-19a342240"
            ],
            jobTitle: "Computer Engineering Student",
            worksFor: {
              "@type": "Organization",
              name: "University of California, Santa Barbara"
            },
            alumniOf: {
              "@type": "Organization",
              name: "University of California, Santa Barbara"
            },
            description: "Computer Engineering student specializing in machine learning, computer vision, and software development.",
            knowsAbout: [
              "Machine Learning",
              "Computer Vision",
              "Software Development",
              "Python",
              "React Native",
              "Cloud Computing"
            ]
          })
        }}
      />
    );
  }