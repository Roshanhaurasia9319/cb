import React, { useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blogs.css";
import HorizontalCardSlider from "../../components/IPLComponent/HorizontalCardSlider";
import {bettingSites, fantasyApps} from "../IPL/IPL"


const blogs = [
  {
    date: "March 2025",
    badges: ["IPL 2025", "Schedule", "Fixtures"],
    title: "IPL 2025 Kicks Off: Complete Schedule, Venues & Match Highlights",
    desc: "IPL 18 began on March 22, 2025, across 13 stadiums including Eden Gardens, Modi Stadium and Ekana. A total of 74 matches planned before mid-May lockdown.",
    imgLink: "./images/blogs/1.jfif",
    content: "The Indian Premier League 2025 started on March 22 in Kolkata (KKR vs RCB) and featured 74 games scheduled across 13 venues. The season was paused on May 9 due to India–Pakistan tensions and resumed from May 17 across six cities, with the final on June 3 in Ahmedabad :contentReference[oaicite:1]{index=1}."
  },
  {
    date: "February–March 2025",
    badges: ["Champions Trophy", "ICC", "ODI"],
    title: "Champions Trophy 2025 Recap: India Beat New Zealand in Final",
    desc: "India emerged victorious in Sharjah, defeating New Zealand in the final on March 9, 2025, winning their second Champions Trophy title.",
    imgLink: "./images/blogs/2.jfif",
    content: "India claimed the ICC Champions Trophy 2025 crown on March 9, defeating New Zealand by 4 wickets in the Dubai final. The tournament ran from Feb 19 to Mar 9 across Pakistan & UAE, and included debutants Afghanistan :contentReference[oaicite:2]{index=2}."
  },
  {
    date: "May 2025",
    badges: ["IPL 2025", "Security", "Resumption"],
    title: "IPL Resumes May 17 After Suspension Amid India‑Pakistan Tensions",
    desc: "IPL paused on May 9 during the PBKS‑DC match in Dharamsala after nearby rocket fire, resuming May 17 in six venues without Hyderabad or Chennai fixtures.",
    imgLink: "./images/blogs/3.jfif",
    content: "During a match between PBKS & DC on May 8, IPL 2025 was suspended after rockets landed ~80 km away. BCCI rescheduled remaining 17 matches from May 17 across Bengaluru, Jaipur, Delhi, Lucknow, Mumbai, and Ahmedabad, concluding June 3 :contentReference[oaicite:3]{index=3}."
  },
  {
    date: "May 2025",
    badges: ["IPL 2025", "Etiquette", "Sunil Gavaskar"],
    title: "Sunil Gavaskar Urges Silenced IPL Return: ‘No Dance, No DJ’",
    desc: "Legend Sunil Gavaskar requested IPL return be more solemn after the Pahalgam terror attack killed 26 on April 22, advocating respectful celebrations.",
    imgLink: "./images/blogs/4.jfif",
    content: "After IPL’s May 17 restart, Gavaskar—referring to the April 22 Pahalgam terror attack—asked for subdued match entries, saying “let the games be played… just cricket. No dance, no DJ” :contentReference[oaicite:4]{index=4}."
  },
  {
    date: "June 2025",
    badges: ["IPL 2025", "RCB", "Champions"],
    title: "RCB Clinch First Ever IPL Title on June 3, 2025",
    desc: "Royal Challengers Bengaluru lifted their maiden IPL trophy by defeating Punjab Kings in a thrilling final in Ahmedabad.",
    imgLink: "./images/blogs/5.jfif",
    content: "On June 3, RCB ended their 18‑year wait, defeating Punjab Kings by 6 runs in the IPL 2025 final at Narendra Modi Stadium, Ahmedabad. Kohli’s celebrations sparked nationwide fan exuberance."
  },
  {
    date: "June 2025",
    badges: ["IPL 2025", "Fan Safety", "Incident"],
    title: "Tragedy in Bengaluru: Crowd Crush After IPL Final Injures Dozens",
    desc: "A crowd crush near M. Chinnaswamy Stadium after the RCB final injured at least 56 and tragically killed 11 fans during street celebration.",
    imgLink: "./images/blogs/6.jfif",
    content: "Following the IPL final celebrations on June 4 near the stadium, at least 11 fans died and 56 were injured in a crowd crush as public excitement spiraled out of control."
  },
  {
    date: "February–March 2025",
    badges: ["Champions Trophy", "India", "Semifinal"],
    title: "India Beat Australia to Set Up Champions Trophy Final",
    desc: "In semis on March 5, India defeated Australia by 4 wickets to reach the final, led by Kohli’s steady knock at Dubai Stadium.",
    imgLink: "./images/blogs/7.jfif",
    content: "India’s semi‑final win vs Australia in Dubai was powered by a composed Kohli inning on March 5, earning a place in the March 9 final against New Zealand :contentReference[oaicite:5]{index=5}."
  },
  {
    date: "May–June 2025",
    badges: ["IPL 2025", "Emerging Stars", "Records"],
    title: "Vaibhav Suryavanshi Becomes Youngest IPL Centurion",
    desc: "14‑year‑old Vaibhav Suryavanshi amazed the cricket world with an IPL century in late May, setting a new age‑record.",
    imgLink: "./images/blogs/8.jfif",
    content: "In a match late May, un-capped 14‑year‑old Suryavanshi hit a blazing century—becoming the youngest centurion in IPL history, showcasing emerging talent in IPL 2025."
  },
  {
    date: "March–April 2025",
    badges: ["IPL 2025", "Highlights", "Venues"],
    title: "Eden Gardens Hosts IPL Opener & Final: A Return to Kolkata",
    desc: "Eden Gardens in Kolkata was chosen to host the IPL opener (KKR vs RCB) and final for only the third time in IPL history.",
    imgLink: "./images/blogs/9.jfif",
    content: "Kolkata’s Eden Gardens hosted both the opening match on March 22 and the final on May 25 (later June 3), marking the third time the iconic venue staged the IPL final :contentReference[oaicite:6]{index=6}."
  },
  {
    date: "May 2025",
    badges: ["IPL 2025", "Lucknow", "Home Matches"],
    title: "Lucknow Super Giants Hosted Two Home Matches in May",
    desc: "After IPL resumption, LSG played at home twice: vs SRH on May 19 and vs RCB on May 27, boosting regional fan support.",
    imgLink: "./images/blogs/10.jfif",
    content: "Lucknow Super Giants returned to Ekana Stadium for two home games post-resumption—against Sunrisers on May 19 and RCB on May 27—symbolizing unity and resilience :contentReference[oaicite:7]{index=7}."
  }
];




const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  

  const handleCardClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-container">
      <div className="blog-container-second">
        {blogs.map((blog, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(blog)}
            style={{ cursor: "pointer" }}
          >
            <BlogCard
              date={blog.date}
              imgLink={blog.imgLink}
              title={blog.title}
              badges={blog.badges}
              desc={blog.desc}
            />
          </div>
        ))}

        <HorizontalCardSlider bettingSites={bettingSites} bettingHeading = {"New Betting Sites"} />
       
        <HorizontalCardSlider bettingSites={fantasyApps} bettingHeading = {"New Fantasy Apps"} />
        
        {selectedBlog && (
          <div className="modal">
            <div className='modal-div'
            >
              <button
                className='modal-button'
                onClick={closeModal}
                onMouseEnter={(e) => (e.target.style.color = "#ff3b3b")}
                onMouseLeave={(e) => (e.target.style.color = "#333")}
                aria-label="Close modal"
              >
                &times;
              </button>
              <h2 className='modal-heading'
              >
                {selectedBlog.title}
              </h2>
              <p className='modal-p1'>
                <strong>Date:</strong> {selectedBlog.date}
              </p>
              <p className='modal-p2'>
                <strong>Tags:</strong>{" "}
                {selectedBlog.badges.map((tag, i) => (
                  <span
                    key={i}
                    className='modal-span'
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <img
                src={selectedBlog.imgLink}
                alt="blog visual"
                width={100}
                height={100}
                className='modal-img'
              />
              <p className='modal-p3'>
                {selectedBlog.content}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
