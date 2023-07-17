"use client";
import AccordionItem from "./AccordionItem";

const accordionData = [
  {
    title: "Accordion title 1",
    content:
      "Eganam “ÉGO” Segbefia got his start busking at the Grand Central Shuttle train station in 2015 as a member of MTA’s Music Under New York program, and since then, has performed at notable venues across New York City such as The Greene Space, Cathedral of St. John The Divine, and the much-revered Carnegie Hall.",
  },
  {
    title: "Accordion title 2",
    content:
      "Eganam was born in Lagos, Nigeria to Ghanaian parents, Moses and Dzineli, an Electrical Engineer and a Chef. His name comes from the Ewé language of Ghana, Africa and means “He [God] has given again”, as God gave them their fourth child. His family migrated from Lagos to the United States in February 1999 after being chosen in the Diversity Immigrant green card lottery.",
  },
  {
    title: "Accordion title 3",
    content:
      "Arriving to New York City at the age of ten, assimilating to new customs was not an easy feat for young Eganam. As a teenager growing up in the Bronx, he participated in after-school music programs and the Drum and Bugle Corps during the summer to safeguard himself from his rough neighborhood. Introduced to a wide array of instruments, he was drawn to the trumpet and recalls: “Initially, playing the trumpet was largely to hide my broken English vernacular from my peers so as not to be teased; but over the years, it has grown to be an extension of myself, which I now use to share my passion and love for music and my life experiences.”",
  },
  {
    title: "Accordion title 4",
    content:
      "Eganam achieved his Classical Trumpet Masters Degree from Manhattan School of Music and earned a Music Education Degree during his undergraduate years at South Carolina State University. Throughout the duration of his studies, his diligence rewarded him with winning multiple awards and scholarships: the Manhattan School of Music Educational Assistance Program Scholarship, South Carolina State University Marching Band Scholarship, SCSU Marching 101 Outstanding Musicianship Award, and the Celia Cruz Bronx High School of Music’s Most Improved award. Most currently, Eganam competed and won Manhattan School of Music’s prestigious Eisenberg-Fried Concerto Competition.",
  },
  {
    title: "Accordion title 5",
    content:
      "By constantly persisting through struggles in his education and life experiences, Eganam developed his motto, “Inspiration Without Perspiration is Hallucination”. Devoted to this mantra, Eganam is currently a member of the United Nations Orchestra and is pursuing his dream of becoming one of the world’s premier soloists while using his growing platform to provide clinics and workshops to high school and college students- highlighting the value of working unremittingly and with full force towards actualizing their dreams!",
  },
];

const Accordion = () => {
  return (
    <div className="">
      <h2 className="font-bold">Accordion</h2>
      <div className="overflow-hidden rounded-md shadow-lg">
        {accordionData.map((item, i) => (
          <div
            key={item.title}
            className={`
          
          `}
          >
            <AccordionItem title={item.title} content={item.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
