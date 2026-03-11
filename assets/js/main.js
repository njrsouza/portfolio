function updateProfileInfo(profileData) {
    const profileName = document.getElementById('profile-name')
    const profilePhoto = document.getElementById('profile-photo')
    const job = document.getElementById('job')
    const location = document.getElementById('location')
    const number = document.getElementById('number')
    const email = document.getElementById('email')


    profileName.innerHTML = profileData.name;
    job.innerHTML = profileData.job;
    location.innerHTML = profileData.location;
    number.innerHTML = profileData.phone;
    email.innerHTML = profileData.email;
    profilePhoto.src = `${profileData.photo}`;
}

function updateSkills(profileData) {
    const softSkills = document.getElementById('softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

    const hardSkills = document.getElementById('hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(hardSkill => `<img src="${hardSkill.logo}" alt="" class="max-h-14">`).join('')
}

function updateIdioma(profileData) {
    const idiomas = document.getElementById('idioma');
    idiomas.innerHTML = profileData.languages.map(language => `<p class="font-semibold text-sm">${language}</p>`).join('')
}

function updateEducation(profileData) {
    const education = document.getElementById('education');
    education.innerHTML = profileData.education.map(course => `<div class="flex flex-col gap-1">
                        <h3 class="text-base">${course.name}</h3>
                        <p class="text-sm font-normal">${course.local} ${course.period}</p>
                    </div>`).join('')
}

function updateProjects(profileData) {
    const portfolio = document.getElementById('projects');
    portfolio.innerHTML = profileData.portfolio.map(project => `<div class="flex items-center gap-2">
                            <img class="max-h-5" src="assets/img/github.png" alt="">
                            <a class="underline font-semibold" href="${project.url}"
                                target="_blank">${project.name}</a>
                        </div>`).join('')
}

function updateExperiencias(profileData) {
    const experiences = document.getElementById('experience');
    experiences.innerHTML = profileData.professionalExperience.map(experience => `<div class="flex flex-col gap-2">

                        <h4 class="text-lg">${experience.name}</h4>

                        <div class="flex items-center gap-2">
                            <img class="max-h-5" src="assets/img/calendario.png" alt="">
                            <p class="font-normal text-base">${experience.period}</p>
                        </div>

                        <p class="text-base font-normal">${experience.description}</p>
                    </div>`)
}



(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSkills(profileData)
    updateIdioma(profileData)
    updateEducation(profileData)
    updateProjects(profileData)
    updateExperiencias(profileData)
    console.log(profileData)
})()