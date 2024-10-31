function loadEducation() {
    const educationContent = `
        <h1>Education</h1>
        <div class="edu">
            <div class="edu-title">International Islamic University Chittagong<br>2020-2024</div>
            <p>Currently pursuing a Bachelor’s degree in Computer and Communication Engineering at IIUC, specializing in game development and software engineering.</p>
            <p><strong>Courses:</strong> Game Design | Computer Science | Communication Engineering</p>
        </div>
        <div class="edu">
            <div class="edu-title">Bangladesh Navy College Chittagong<br>2017-2019</div>
            <p>Completed my Higher Secondary School Certificate (HSC) with a focus on science.</p>
            <p><strong>Courses:</strong> Physics | Chemistry | Math</p>
        </div>
    `;

    document.getElementById('career_content').innerHTML = educationContent;
}
