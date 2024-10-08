import MainImage from "@/public/webp/blog/recent/detail-one.webp";
import DetailImage from "@/public/webp/blog/recent/detail-two.webp";
import blogOne from "@/public/webp/blog/recent/one.webp";
import blogTwo from "@/public/webp/blog/recent/two.webp";
import blogThree from "@/public/webp/blog/recent/three.webp";

export const blogArticleDetails = [
  {
    id: "1",
    title:
      "From $0 To $40 Million: How A 10-Year-Old Orphan Became A Successful Investor",
    description:
      "It can be a challenge to maintain balanced, healthy eating when you work from home. Try these 10 quick tips for healthy eating habits.",
    category: "Success Stories",
    date: "12 February 2024",
    image: MainImage,
    intro:
      "Imagine one day living in a luxurious, spacious house with everything you could possibly want in life. Now contrast that with red and blue lights filling your home, with officers yelling and sirens blaring. Then, envision a SWAT team ripping you away from your parents. Although it seems far-fetched, this actually happened. ",
    additionalIntro:
      "By all accounts, John was living a charmed “trust fund” life, but that was quickly all taken away from him. At age 10, that left John Mansor a ward of the state—orphaned and alone, with only his brother, David, alongside him. He’s spent the last 15-plus years climbing back to the top.",
    content: [
      {
        type: "heading",
        text: "A Way Out: Focusing On What Can Be Controlled",
      },
      {
        type: "paragraph",
        text: "Living as a ward of the state, life was a real battle of survival for John as a child. As he entered middle school, an opportunity for a change of scenery changed his perspective on life. He was granted a scholarship to a sleepaway camp nestled in the Adirondack Mountains called the Raquette Lake Boys Camp. Soon after, John was taken in and adopted.",
      },
      {
        type: "list",
        items: [
          {
            heading: "Preparation Meets Opportunity",
            text: "Upon graduating, the harsh reality of the job market hit him when many potential employers believed he lacked relevant experience for an entry-level finance job. Undeterred, John entered tech sales. After some success, John realized something was missing and couldn’t figure out how to get back to the life he used to have as a kid.",
          },
          {
            heading: "Luck or Fate? Becoming a Wholesaler",
            text: "There’s a saying that “luck is when preparation meets opportunity.” This is the type of luck that those in search of financial freedom seek. They don’t wait for something good to happen—they find ways to stack the deck in their favor. That’s exactly what John did. Once John set his sights on earning more, he began researching ways to create passive income, searching the internet for phrases like “how to build generational wealth.”",
          },
          {
            heading: "The Value of Active Listening",
            text: "Early on, John realized that sales is fundamentally about active listening—a skill that involves understanding the other party’s needs, concerns, and motivations. With determination, grit, and an inherent knack for connecting with people on a genuine level, John recognized the power of emotional intelligence in real estate transactions.",
          },
        ],
      },
      {
        type: "image",
        src: DetailImage,
        alt: "Real estate wholesaling process",
      },
      {
        type: "heading",
        text: "From $0 to $40 Million in Assets",
      },
      {
        type: "intro",
        text: "Taking down this eight-unit property marked a shift from quick, active income to a more strategic approach focused on creating sustainable wealth. With a keen eye for acquisitions and a knack for sourcing opportunities, John entered real estate with a commitment to invest back into the business.",
      },
      {
        type: "additionalIntro",
        text: " The journey was one of bootstrapping, where each step forward was a lesson in sourcing, acquiring, and operating the acquired assets. This quickly led to rapid growth over a two-year period, where they would purchase RV parks and more multifamily properties, such as a 40-unit townhouse community on Cape Cod.",
      },
    ],
    author: "John Doe",
    recentArticles: [
      {
        id: 1,
        title: "15 Reasons Why Real Estate is the Best Investment",
        image: blogTwo,
        category: "tips",
        date: "July 20, 2024",
      },
      {
        id: 2,
        title:
          "Renters Are Still Moving—These Markets Are Where You Should Be Investing",
        image: blogOne,
        category: "success-stories",
        date: "August 10, 2024",
      },
      {
        id: 3,
        title:
          "Every Major U.S. City Where It’s More Expensive to Rent Than Buy",
        image: blogThree,
        category: "invest",
        date: "August 10, 2024",
      },
    ],
  },
];
