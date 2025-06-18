---
layout: default
title: Home
---

<!-- Hero Section -->
<section class="hero-section" id="home">
    <div class="hero-content">
        <p class="hero-greeting">Hi, my name is</p>
        <h1 class="hero-title">Tamoghna Das.</h1>
        <h2 class="hero-subtitle">I explore AI & Life Sciences.</h2>
        <p class="hero-description">
            I'm a data scientist and researcher specializing in machine learning applications in biology and healthcare. 
            Currently, I'm focused on developing AI solutions that bridge the gap between computational and biological sciences.
        </p>
        <a href="#contact" class="btn btn-primary">Get In Touch</a>
    </div>
</section>

<!-- About Section -->
<section id="about" class="fade-in">
    <h2 class="section-title">About Me</h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <p class="text-lg text-gray-300 mb-4">
                Hello! I'm Tamoghna, a data scientist passionate about using AI to solve complex biological problems. 
                My journey began at the intersection of computer science and life sciences, where I discovered the 
                immense potential of machine learning in advancing our understanding of biological systems.
            </p>
            <p class="text-lg text-gray-300 mb-4">
                I specialize in developing machine learning models for biological data analysis, with a particular 
                focus on genomics and protein structure prediction. My work aims to bridge the gap between 
                computational methods and biological research.
            </p>
            <p class="text-lg text-gray-300">
                When I'm not coding or analyzing data, I enjoy teaching and sharing knowledge about AI and 
                bioinformatics through workshops and online content.
            </p>
        </div>
        <div class="profile-container mx-auto">
            <div class="profile-image-wrapper">
                <img src="assets/images/profile.jpg" alt="Tamoghna Das" class="profile-image">
            </div>
        </div>
    </div>
</section>

<!-- Experience Section -->
<section id="experience" class="fade-in">
    <h2 class="section-title">Where I've Worked</h2>
    <div class="timeline-container">
        <div class="timeline-item slide-in">
            <h3 class="text-xl font-bold text-gray-100">Senior Data Scientist</h3>
            <p class="text-teal-300 font-mono text-sm mb-2">2023 - Present</p>
            <p class="text-gray-300">Leading AI initiatives in genomics and protein structure prediction.</p>
        </div>
        <div class="timeline-item slide-in">
            <h3 class="text-xl font-bold text-gray-100">AI Researcher</h3>
            <p class="text-teal-300 font-mono text-sm mb-2">2021 - 2023</p>
            <p class="text-gray-300">Developed novel machine learning approaches for biological data analysis.</p>
        </div>
        <div class="timeline-item slide-in">
            <h3 class="text-xl font-bold text-gray-100">Data Science Intern</h3>
            <p class="text-teal-300 font-mono text-sm mb-2">2020 - 2021</p>
            <p class="text-gray-300">Applied ML techniques to solve complex biological problems.</p>
        </div>
    </div>
</section>

<!-- Skills Section -->
<section id="skills" class="fade-in">
    <h2 class="section-title">What I Do</h2>
    <div class="grid md:grid-cols-2 gap-8">
        <div class="card p-6">
            <h3 class="text-xl font-bold text-gray-100 mb-4">Technical Skills</h3>
            <div class="space-y-2">
                <div class="skill-badge">Python</div>
                <div class="skill-badge">TensorFlow</div>
                <div class="skill-badge">PyTorch</div>
                <div class="skill-badge">Scikit-learn</div>
                <div class="skill-badge">Pandas</div>
                <div class="skill-badge">Bioinformatics</div>
            </div>
        </div>
        <div class="card p-6">
            <h3 class="text-xl font-bold text-gray-100 mb-4">Research Areas</h3>
            <div class="space-y-2">
                <div class="skill-badge">Machine Learning</div>
                <div class="skill-badge">Deep Learning</div>
                <div class="skill-badge">Genomics</div>
                <div class="skill-badge">Protein Structure</div>
                <div class="skill-badge">Data Analysis</div>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio Section -->
<section id="portfolio" class="fade-in">
    <h2 class="section-title">Featured Projects</h2>
    <div class="grid md:grid-cols-2 gap-8">
        <div class="project-card">
            <h3 class="project-title">Protein Structure Prediction</h3>
            <p class="project-description">
                Developed a deep learning model for predicting protein structures from sequence data.
            </p>
            <div class="project-tech">
                <span class="project-tech-item">PyTorch</span>
                <span class="project-tech-item">Python</span>
                <span class="project-tech-item">Bioinformatics</span>
            </div>
            <div class="project-links">
                <a href="#" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
        <div class="project-card">
            <h3 class="project-title">Genomic Data Analysis</h3>
            <p class="project-description">
                Created a pipeline for analyzing large-scale genomic data using machine learning.
            </p>
            <div class="project-tech">
                <span class="project-tech-item">TensorFlow</span>
                <span class="project-tech-item">Python</span>
                <span class="project-tech-item">Genomics</span>
            </div>
            <div class="project-links">
                <a href="#" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="fade-in">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-form">
        <div class="form-group">
            <input type="text" class="form-input" placeholder="Name" required>
        </div>
        <div class="form-group">
            <input type="email" class="form-input" placeholder="Email" required>
        </div>
        <div class="form-group">
            <textarea class="form-input" rows="5" placeholder="Message" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary w-full">Send Message</button>
    </div>
</section>
