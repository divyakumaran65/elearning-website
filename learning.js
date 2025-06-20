const courseData = [
    {
      name: 'Web Development',
      icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
      desc: 'Master HTML, CSS, JavaScript and modern frameworks.'
    },
    {
      name: 'Java Programming',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
      desc: 'Object-oriented programming and backend development with Java.'
    },
    {
      name: 'Python Programming',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      desc: 'Learn Python for web, data, and automation projects.'
    },
    {
      name: 'SQL & Databases',
      icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png',
      desc: 'Manage and query relational databases using SQL.'
    },
    {
      name: 'Digital Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/512/1155/1155241.png',
      desc: 'Learn SEO, content strategy, social media and ad campaigns.'
    },
    {
      name: 'Java Frameworks',
      icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
      desc: 'Explore Spring, Hibernate and modern Java enterprise tools.'
    },
    {
      name: 'Power BI',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
      desc: 'Create interactive dashboards and business reports using Power BI.'
    }
  ];
  
  // Simulate enrolled courses
  const enrolledCourses = [
    'Web Development',
    'Java Programming',
    'Python Programming',
    'SQL & Databases',
    'Digital Marketing',
    'Java Frameworks',
    'Power BI'
  ];
  
  const container = document.getElementById('enrolledCourses');
  container.innerHTML = '';
  
  enrolledCourses.forEach(course => {
    const match = courseData.find(c => c.name === course);
    if (match) {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <img src="${match.icon}" alt="${match.name}" class="course-icon">
        <div class="course-info">
          <h3>${match.name}</h3>
          <p>${match.desc}</p>
        </div>
      `;
      container.appendChild(card);
    }
  });

  const progress = Math.floor(Math.random() * 100); // simulate progress
card.innerHTML = `
  <img src="${match.icon}" alt="${match.name}" class="course-icon">
  <div class="course-info">
    <h3>${match.name}</h3>
    <p>${match.desc}</p>
    <div class="progress-container">
      <div class="progress-bar" style="width: ${progress}%;"></div>
    </div>
    <p class="progress-text">${progress}% complete</p>
  </div>
`;
