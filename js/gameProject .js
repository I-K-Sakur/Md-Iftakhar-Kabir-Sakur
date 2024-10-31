const projectsData = {
    game: [
        {
            title: 'Captain-Zoro',
            description: 'A story based FPS game',
            time: '4+ months',
            engine: 'Unity',
            gif: 'data/image/Captain-Zoro.png', // Path to the project's GIF
            link: 'projects/Captain_Zoro.html',
            
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Empty array for no videos
        },

        {
            title: 'Ashphalt-Vs-Aviation',
            description: 'Clash between Ashphalt and Aviation',
            time: '6 Weeks',
            engine: 'Unity',
            gif: 'data/image/ashphatl_vs_aviation.gif',  // Corrected GIF path
            link: 'projects/ashphalt_vs_aviation.html',
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Add video IDs as an array
        },
        {
            title: 'The Apartheid',
            description: 'War game',
            time: '3 days',
            engine: 'Unity',
            gif: 'data/image/The_Apartheid_1.png',  // Corrected GIF path
            link: 'projects/The_Apartheid.html',
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Add video IDs as an array
        },

        {
           
            title: 'Satellite Simulator Prototype',
            description: 'It is just a Prototype of Satellite and Rocket',
            time: '3+ hours',
            engine: 'Unity',
            gif: 'data/image/Satellite2.png',// Path to the project's GIF
            link: 'projects/Satellite_Simulator_Prototype.html',
            videoIds: [] // Empty array for no videos
        },
        // {
        //     title: 'New Project Name',
        //     description: 'Description of the project.',
        //     time: 'Project Duration',
        //     engine: 'Game Engine Used',
        //     gif: 'path/to/gif.gif', // Path to the project's GIF
        //     link: 'projects/new_project.html',
        //     videoIds: [] // Empty array for no videos
        // },
        // {
        //     title: 'New Project Name',
        //     description: 'Description of the project.',
        //     time: 'Project Duration',
        //     engine: 'Game Engine Used',
        //     gif: 'path/to/gif.gif', // Path to the project's GIF
        //     link: 'projects/new_project.html',
        //     videoIds: [] // Empty array for no videos
        // },
        // {
        //     title: 'New Project Name',
        //     description: 'Description of the project.',
        //     time: 'Project Duration',
        //     engine: 'Game Engine Used',
        //     gif: 'path/to/gif.gif', // Path to the project's GIF
        //     link: 'projects/new_project.html',
        //     videoIds: [] // Empty array for no videos
        // },
       
        
    ],
    other: [
        // Other projects
        //         {
        //     title: 'New Project Name',
        //     description: 'Description of the project.',
        //     time: 'Project Duration',
        //     engine: 'Game Engine Used',
        //     gif: 'path/to/gif.gif', // Path to the project's GIF
        //     link: 'projects/new_project.html',
        //     videoIds: [] // Empty array for no videos
        // },
    ]
};

function showProjects(type) {
    const projectContainer = document.getElementById('Projects');
    projectContainer.innerHTML = ''; // Clear the section before rendering new content

    if (projectsData[type]) {
        projectsData[type].forEach((project, index) => {
            // Determine if the index is odd or even
            const alignmentClass = index % 2 === 0 ? 'even' : 'odd'; // Use 'even' for even indexes, 'odd' for odd indexes

            const projectHTML = `
            <div class="project-item ${alignmentClass}">
                <img src="${project.gif}" alt="${project.title} GIF" class="project-gif">
                <h3 style="color: #007BFF; font-weight: bold;">${project.title}</h3>
                <p style="color: #28a745;">${project.description}</p>
                <p style="color: #ffc107;">Time: ${project.time}</p>
                <p style="color: #17a2b8;">Engine: ${project.engine}</p>
                <a href="${project.link}" style="color: #9FE2BF; text-decoration: none;" onmouseover="this.style.color='#c82333'" onmouseout="this.style.color='#dc3545'">View Project</a>
            </div>
        `;
        
            projectContainer.innerHTML += projectHTML;

            // // Add embedded YouTube videos if they exist
            // if (project.videoIds.length > 0) {
            //     project.videoIds.forEach(videoId => {
            //         const videoHTML = `
            //             <div class="embedded-video ${alignmentClass}">
            //                 <iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}" 
            //                 title="YouTube video player" frameborder="0" 
            //                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            //                 </iframe>
            //             </div>
            //         `;
            //         projectContainer.innerHTML += videoHTML; // Append video HTML
            //     });
            // }
        });
    } else {
        projectContainer.innerHTML = '<p>No projects found.</p>';
    }
}

