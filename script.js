// Add JS here

const projectsContainer = document.getElementById('projectsContainer');
 fetch('projects.json')
   .then(response => response.json())
   .then(projects => {
     projects.forEach(project => {
       const projectDiv = document.createElement('div');
       projectDiv.classList.add('project');

       const title = document.createElement('h3');
       title.textContent = project.title;

       const description = document.createElement('p');
       description.textContent = project.description;

       const link = document.createElement('a');
       link.href = project.link;
       link.classList.add('project-link');
       link.textContent = 'Learn More';

       projectDiv.appendChild(title);
       projectDiv.appendChild(description);
       projectDiv.appendChild(link);

       projectsContainer.appendChild(projectDiv);
     });
   });
