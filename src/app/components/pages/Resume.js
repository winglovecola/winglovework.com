import React from 'react';

export default function Blog() {
  return (
    <section id="resume" className="content-section">


      <div id="resume-title" className="content-title">Resume</div>
      <div id="resume-content" >
        <div id="resume-div" className="resume-div">
          <div >
            <h2>Resume</h2>
            <a href="https://docs.google.com/document/d/19FakS76PjwwJzKQfTm0xuiWOt5MM7XLniYlltOjdYnU/edit?usp=sharing" target="_blank" rel="noreferrer" ><img src="/img/icons/word-doc-icon.png" alt="Google Doc Icon" /><br />View My Resume</a>

          </div>

          <div>
            <h2>LinkedIn</h2>
            <a href="https://linkedin.com/in/winglovecola/" target="_blank" rel="noreferrer" ><img src="/img/icons/linkedin.png" alt="LinkIn Icon" /><br />View My LinkedIn</a>

          </div>

          <div>
            <h2>GitHub</h2>
            <a href="https://github.com/winglovecola" target="_blank" rel="noreferrer" ><img src="/img/icons/github.png" alt="GitHub Icon" /><br />View My GitHub</a>

          </div>
        </div>


      </div>

    </section>
  );
}
