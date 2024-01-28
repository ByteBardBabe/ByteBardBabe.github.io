import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
import '../styles/about.css';
import { aboutAni } from "../animations/aboutAnimation";

const About = () => {
  useEffect(() => {
    aboutAni();
  }, []);
    return (
      <div>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/art">Art</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="description panel blue">
          <h1 className="startPanel">
            Scroll down to learn all about me.
          </h1>
        </div>
        <div className="swipe-section">
          <section className="panel red">
            <h1 id="header">Who am I?</h1>
            <p className="bodyp" id="paragraph1">
              Hey there! I'm <strong>Cait Stewart</strong>, and life's been quite the
              ride, let me tell you.
            </p>
          </section>
          <section className="panel orange">
            <p className="bodyp" id="paragraph2">
              In the world of cooking, I've taken simple ingredients and turned them
              into <strong>culinary masterpieces.</strong> Picture a lively kitchen, where
              the sizzle of ingredients and the aroma of herbs and spices fill the
              air—it's a place where I've created dishes that feel like{" "}
              <strong>warm hugs</strong> and{" "}
              <strong>unforgettable dining experiences.</strong>
              <br /> <br /> <br />
              Stepping into the corporate world, I became the friendly voice in{" "}
              <strong>customer service</strong> and dived deep into the world of{" "}
              <strong>banking</strong>. As a financial professional, I navigated the
              complexities of managing accounts, understanding economic landscapes,
              and helping real people and businesses achieve their financial dreams.
            </p>
          </section>
          <section className="panel purple">
            <p className="bodyp" id="paragraph4">
              Oh, and I've tried my hand at running a small business. It's no joke—
              <strong>entrepreneurship</strong> taught me{" "}
              <strong>resilience</strong> and{" "}
              <strong>adaptability</strong>. From navigating permits to the dance of
              supply and demand, it's about{" "}
              <strong>creating something meaningful</strong>{" "}
              and contributing to the community. It's a journey I wouldn't trade for
              anything.
              <br />
              <br />
              <br />
              I'm not just about the 9-to-5 hustle. I'm deeply into{" "}
              <strong>committees</strong>, passionate about independent journalism,
              and <strong>advocate for meaningful causes</strong>. Beyond work, I
              dedicate a significant part of my life to community impact through care
              and{" "}
              <strong>volunteer work</strong>. Advocacy is more than a buzzword—it's
              my commitment to being a voice for the voiceless and creating a more{" "}
              <strong>inclusive society</strong>.
            </p>
          </section>
          <section className="panel green">
            <p className="bodyp" id="paragraph6">
              Now, let's talk art. One facet of my identity that holds a special place
              in my heart is my journey as a <strong>digital artist</strong>. In the
              vast realm of pixels and creativity, I've found a canvas of{" "}
              <strong>infinite possibilities</strong> where imagination knows no
              bounds. Part of the beauty of digital art lies in its accessibility and
              inclusivity. It transcends physical constraints, reaching audiences{" "}
              <strong>across the globe</strong> with just a click.
              <br />
              <br />
              <br />
              In a world of giants, I'm all about supporting the little guys—small
              businesses have a special place in my heart. It's about{" "}
              <strong>community, shared dreams</strong>, and the belief that{" "}
              <strong>together, we can make a difference</strong>. Having been an
              entrepreneur myself, I understand the dedication and love poured into
              small businesses. It's not just about transactions; it's about{" "}
              <strong>connections, relationships, and shared prosperity</strong>.
            </p>
          </section>
        </div>
        <div className="container horizontal">
          <section className="panel blue">
            <h1 id="header2">What do I do now?</h1>
            <p className="bodyp" id="paragraph8">
              Step into the heart of my <strong>coding journey!</strong> Right now,
              I'm fully immersed in the dynamic world of web development, equipped
              with a solid grasp of <strong>HTML, CSS, and JavaScript.</strong> While
              my experience with{" "}
              <strong>React</strong> is still in its early stages, I've successfully
              implemented various libraries to add that extra flair and interactivity
              to websites, making them more engaging for users.
            </p>
          </section>
          <section className="panel green">
            <p className="bodyp" id="paragraph9">
              When it comes to <strong>teamwork</strong> and{" "}
              <strong>collaboration</strong>,{" "}<strong>Git</strong> and{" "}
              <strong>GitHub</strong> are my trusty companions, though I'll admit,
              we're still acquainting ourselves with each other. Together, we're
              working towards achieving that seamless collaboration magic, ensuring
              that projects unfold <strong>smoothly and efficiently.</strong>
            </p>
          </section>
          <section className="panel purple">
            <p className="bodyp" id="paragraph10">
              Looking ahead, I'm actively broadening my skill set. Currently, I'm
              delving into{" "}
              <strong>Express.js</strong> for{" "}
              <strong>backend development</strong>, discovering the ins and outs of{" "}
              <strong>PostgreSQL</strong> for efficient{" "}
              <strong>data management</strong>, and unraveling the complexities of{" "}
              <strong>API development</strong>.
            </p>
          </section>
          <section className="panel orange">
            <p className="bodyp" id="paragraph11">
              What makes my coding journey <strong>unique</strong> is the commitment
              to <strong>continuous learning</strong>. I'm currently enrolled in the
              Codecademy <strong>Full-Stack Engineer Course</strong>, a challenging but rewarding
              experience that I aim to conquer by{" "}
              <strong>April 2024</strong>. The course is shaping my understanding of
              the full web development stack, from <strong>frontend</strong> to{" "}
              <strong>backend</strong>, and everything in between.
            </p>
            <br />
            <br />
            <br />
            <h1>Let's Connect!</h1>
          </section>
        </div>

      </div>
  
    );
}
  
export default About;