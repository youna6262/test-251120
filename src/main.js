import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="profile">
      <div class="profile-image">
        <div class="avatar">👤</div>
      </div>
      <h1 class="name">이유나나</h1>
      <p class="title">웹 개발자</p>
    </div>
    
    <div class="content">
      <section class="section">
        <h2>안녕하세요! 👋</h2>
        <p>
          열정적인 웹 개발자입니다. 사용자 경험을 중시하며 
          깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
        </p>
      </section>
      
      <section class="section">
        <h2>기술 스택</h2>
        <div class="skills">
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">Vite</span>
        </div>
      </section>
      
      <section class="section">
        <h2>연락처</h2>
        <div class="contact">
          <p>📧 email@example.com</p>
          <p>🔗 github.com/username</p>
        </div>
      </section>
    </div>
  </div>
`
