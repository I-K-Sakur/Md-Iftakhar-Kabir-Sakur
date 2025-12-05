const projectsData = {
    game: [
        {
            title: 'MechaMorph Battle Sphere ',
            description: 'Action, Survival, Strategy',
            time: '4 months',
            engine: 'Unity',
            gif: 'data/Gif/Mechamorph.gif', // Path to the project's GIF
            link: 'projects/Mechamorph_Battle.html',
            
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Empty array for no videos
        },

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
            title: 'Infinity-Runner',
            description: 'A fast-paced endless runner game where you dodge obstacles and collect point',
            time: '3 Days',
            engine: 'Unity',
            gif: 'data/Gif/InfinityRunner.gif', // Path to the project's GIF
            link: 'projects/Infinity_Runner.html',
            
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Empty array for no videos
        },
        {
            title: 'Deckmaster-Unite',
            description: 'Bridge Card,UNO,Pokemon Card Game',
            time: '8 Days',
            engine: 'Unity',
            gif: 'data/Gif/Deckmaster.gif', // Path to the project's GIF
            link: 'projects/Deckmaster_Unite.html',
            
            videoIds: ['YOUR_VIDEO_ID_1', 'YOUR_VIDEO_ID_2'] // Empty array for no videos
        },
        {
            title: 'This-Is-Blast',
            description: '2D Color-Shooting puzzle game',
            time: '1 day',
            engine: 'Unity',
            gif: 'data/Gif/thisisblast.gif', // Path to the project's GIF
            link: 'projects/This_Is_Blast.html',
            
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
    Simulation: [
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
        {
           
            title: 'Satellite Simulator Prototype',
            description: 'It is just a Prototype of Satellite and Rocket',
            time: '3+ hours',
            engine: 'Unity',
            gif: 'data/image/Satellite2.png',// Path to the project's GIF
            link: 'projects/Satellite_Simulator_Prototype.html',
            videoIds: [] // Empty array for no videos
        },
        {
           
            title: 'Hand-Gesture Robot Control Simulation',
            description: 'A Hand Gesture Simulation Project',
            time: '4 hours',
            engine: 'Unity',
            gif: 'data/Gif/HandGesture.gif',// Path to the project's GIF
            link: 'projects/HandGesture.html',
            videoIds: [] // Empty array for no videos
        },
    ],
    Ai_ML:[
        {
           
            title: 'Real-Time Multi-Class Face Recognition Using Deep Embedding and a Novel Lightweight Deep Learning Model',
            description: 'A Face Recognition Project',
            time: '2 Month+',
            engine: 'python,OpenCV,TensorFlow,Keras & others..',
            gif: 'data/Gif/FaceRecognition-02.gif',// Path to the project's GIF
            link: 'projects/FaceRecognition.html',
            videoIds: [] // Empty array for no videos
        },
    ],
    Software:[
        {
            title: 'School Management System',
            description: 'A School Management System Software Project Backend',
            time: '4 hours',
            engine: 'Python',
            gif: 'data/image/SchoolManagement.png',// Path to the project's GIF
            link: 'projects/SchoolManagementSystem.html',
            videoIds: [] // Empty array for no videos
        },
        {
            title: 'Restaurent Management System',
            description: 'A Restaurent_Management_System Software Project Backend',
            time: '3 hours',
            engine: 'Python',
            gif: 'data/image/Restaurent.png',// Path to the project's GIF
            link: 'projects/RestaurentManagementSystem.html',
            videoIds: [] // Empty array for no videos
        }
    ]
};

function showProjects(type) {
    const projectContainer = document.getElementById('Projects');

    // If container is already visible, hide it and return
    if (projectContainer.style.display === "flex") {
        projectContainer.style.display = "none";
        return;
    }

    // Otherwise, show it
    projectContainer.style.display = "flex";

    // Clear previous content
    projectContainer.innerHTML = '';

    if (projectsData[type]) {
        projectsData[type].forEach((project, index) => {
            const alignmentClass = index % 2 === 0 ? 'even' : 'odd';
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
        });
    } else {
        projectContainer.innerHTML = '<p>No projects found.</p>';
    }
}

function toggleOtherProject() {
    const extraButtons = document.getElementById("extraButtons");

    if (extraButtons.style.display === "none") {
        extraButtons.style.display = "flex";  // show
    } else {
        extraButtons.style.display = "none";   // hide
    }
}

