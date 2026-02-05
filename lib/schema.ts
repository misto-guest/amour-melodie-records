export const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://amourmelodierecords.net/#organization",
      "name": "Amour Melodie Records",
      "url": "https://amourmelodierecords.net",
      "logo": "https://amourmelodierecords.net/logo.png",
      "sameAs": [
        "https://facebook.com/amourmelodierecords",
        "https://twitter.com/amourmelodierecords",
        "https://instagram.com/amourmelodierecords",
        "https://linkedin.com/company/amourmelodierecords"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "World Trade Center Amsterdam, 8th floor, Strawinskylaan 1",
        "addressLocality": "Amsterdam",
        "postalCode": "1077 XW",
        "addressCountry": "NL"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31-20-1234567",
        "contactType": "customer service",
        "email": "contact@amourmelodierecords.net",
        "areaServed": "NL",
        "availableLanguage": ["Dutch", "English"]
      }
    },
    {
      "@type": "MusicEvent",
      "name": "Amour Melodie Records - Piano Music Productions",
      "performer": {
        "@type": "MusicGroup",
        "name": "Amour Melodie Records Artists"
      },
      "location": {
        "@type": "Place",
        "name": "Amsterdam",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Amsterdam",
          "addressCountry": "NL"
        }
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://amourmelodierecords.net/#website",
      "url": "https://amourmelodierecords.net",
      "name": "Amour Melodie Records",
      "publisher": {
        "@id": "https://amourmelodierecords.net/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://amourmelodierecords.net/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://amourmelodierecords.net"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Artists",
          "item": "https://amourmelodierecords.net/#artists"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Releases",
          "item": "https://amourmelodierecords.net/releases"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Amour Melodie Records?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Amour Melodie Records is Amsterdam's premier piano music label, dedicated to discovering and nurturing exceptional piano talent worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "How can I submit my demo to Amour Melodie Records?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can submit your demo through our website at /demo or by emailing contact@amourmelodierecords.net"
          }
        }
      ]
    }
  ]
};

export const artistSchema = (artistName: string, genre: string) => ({
  "@type": "MusicGroup",
  "name": artistName,
  "genre": genre,
  "description": `Talented ${genre} pianist represented by Amour Melodie Records`,
  "memberOf": {
    "@type": "Organization",
    "name": "Amour Melodie Records"
  }
});
