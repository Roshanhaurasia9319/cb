import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

// const cards = [
//   {
//     title: "Narendra Modi Stadium Pitch Report Batting or Bowling, IPL Records, Stats: IPL 2024",
//     tags: ["Pitch Report", "Cricket Betting"],
//     img: "/images/firstNews.jpg",
//     desc: "Narendra Modi Stadium Pitch Report: The 17th edition of Tata Indian Premier League is going on its ...",
//     date: "March 9, 2024",
//     views: 1071
//   },
//   {
//     title: "Exciting IPL Betting Offers for 2024 are available here!",
//     tags: ["Cricket Betting", "IPL"],
//     img: "/images/secondNews.webp",
//     desc: "IPL Betting Offers: The Indian Premier League is all set to get started at the end of ...",
//     date: "March 6, 2024",
//     views: 861
//   },
//   {
//     title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
//     tags: ["IPL", "Betting News", "Cricket Betting"],
//     img: "/images/thirdNews.webp",
//     desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
//     date: "March 6, 2024",
//     views: 1158
//   },
//   {
//     title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
//     tags: ["IPL", "Betting News", "Cricket Betting"],
//     img: "/images/thirdNews.webp",
//     desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
//     date: "March 6, 2024",
//     views: 1158
//   },
//   {
//     title: "10 Expert Cricket Betting Tips for 100% Accurate Predictions in Matches",
//     tags: ["IPL", "Betting News", "Cricket Betting"],
//     img: "/images/thirdNews.webp",
//     desc: "Cricket Betting Tips: India is recognised explicitly in terms of sports for the intense fandom and craze ...",
//     date: "March 6, 2024",
//     views: 1158
//   }
// ];

const cards = [
  {
    title: "RCB Wins IPL 2025: Kohli’s Dream Finally Comes True After 18 Years",
    tags: ["IPL 2025", "RCB", "Cricket News"],
    img: "/images/ipl2025.jfif",
    desc: "IPL 2025 Final: Royal Challengers Bengaluru defeated Punjab Kings in a thrilling finale to lift their first-ever IPL trophy. Kohli’s emotional celebration went viral!",
    date: "June 3, 2025",
    views: 3421
  },
  {
    title: "Bengaluru Crowd Crush After RCB Win: 11 Dead, 56 Injured",
    tags: ["IPL 2025", "Breaking News", "Fan Safety"],
    img: "/images/stampede.jfif",
    desc: "Tragedy struck Bengaluru as celebrations turned deadly near Chinnaswamy Stadium. Officials are under fire for poor crowd management.",
    date: "June 4, 2025",
    views: 2085
  },
 {
  title: "Champions Trophy 2025: Australia Knocked Out in Semis, India Clinches Title",
  tags: ["Champions Trophy", "India vs Australia", "Cricket"],
  img: "/images/indvsaus.jfif",
  desc: "India’s journey in the Champions Trophy 2025 ended on a high as they defeated England in the final. Australia, the defending champions, were knocked out in the semifinals.",
  date: "June 15, 2025",
  views: 2893
},
  {
    title: "Young Star Vaibhav Suryavanshi Becomes Youngest IPL Centurion",
    tags: ["IPL 2025", "Young Talent", "Records"],
    img: "/images/vaibhav.jfif",
    desc: "At just 14, Vaibhav Suryavanshi stunned the cricket world with a century in IPL 2025—making him the youngest centurion in IPL history.",
    date: "May 28, 2025",
    views: 1987
  },
  {
    title: "Cricket Betting Trends in 2025: IPL Viewership Drives Massive Surge",
    tags: ["Cricket Betting", "IPL 2025", "Trends"],
    img: "/images/bettingTrends.jfif",
    desc: "The IPL 2025 season shattered digital viewership records and drove a new boom in online betting. Experts warn of regulatory crackdowns coming soon.",
    date: "June 5, 2025",
    views: 1724
  }
];


const NewsCard = () => {
  const navigate = useNavigate();

  return (
    <section className="card-grid" onClick={() => navigate('/blogs')}>
      <h2>🏺 Recent Events</h2>
      <div className="grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt="Card visual" />
            <div className="tag-list">
              {card.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <div className="meta">
              <span>{card.date}</span>
              <span>👁 {card.views}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsCard;
