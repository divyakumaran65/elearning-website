let selectedCourse = '';

function openForm(courseName) {
  selectedCourse = courseName;
  document.getElementById('courseTitle').textContent = courseName;
  document.getElementById('enrollModal').style.display = 'flex';
}

function closeForm() {
  document.getElementById('enrollModal').style.display = 'none';
}

function submitEnrollment() {
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();

  if (!name || !email) {
    alert('Please enter both name and email!');
    return;
  }

  // Store user data in localStorage
  localStorage.setItem('enrolledName', name);
  localStorage.setItem('enrolledEmail', email);
  localStorage.setItem('enrolledCourse', selectedCourse);

  // Redirect to dashboard
  window.location.href = 'dashboard.html';
}
// Sample course links
const courseLinks = {
    'Web Development': 'https://www.youtube.com/watch?v=3JluqTojuME',
    'Java': 'https://www.youtube.com/watch?v=grEKMHGYyns',
    'Python': 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
    'SQL': 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
    'Digital Marketing': 'https://www.youtube.com/watch?v=nRj0JXE-eNA',
    'Java Frameworks': 'https://www.youtube.com/watch?v=s-BUz3bDXX0',
    'Power BI': 'https://www.youtube.com/watch?v=AGrl-H87pRU',
    'Data Science': 'https://www.youtube.com/watch?v=ua-CiDNNj30',
    'UI/UX Design': 'https://www.youtube.com/watch?v=_QpUZdCwzUg'
  };
  
  // Get enrolled course from local storage
  const course = localStorage.getItem('enrolledCourse');
  const name = localStorage.getItem('enrolledName');
  
  const container = document.getElementById('enrolledCourses');
  
  if (course && courseLinks[course]) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h3>${course}</h3>
      <p>Hello, ${name || 'Learner'}!</p>
      <a href="${courseLinks[course]}" target="_blank">Continue Learning</a>
    `;
    container.appendChild(card);
  } else {
    container.innerHTML = '<p>You have not enrolled in any courses yet.</p>';
  }
