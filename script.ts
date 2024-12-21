document.getElementById('ResumeForm')?.addEventListener('submit',function (event) {
  event.preventDefault();
       
  const nameElement = document.getElementById('Name') as HTMLInputElement;
  const emailElement = document.getElementById('Email') as HTMLInputElement;
  const phoneElement = document.getElementById('Phone') as HTMLInputElement;
  const educationElement = document.getElementById('Education') as HTMLInputElement;
  const experienceElement = document.getElementById('Experience') as HTMLInputElement;
  const skillsElement = document.getElementById('Skills') as HTMLInputElement;

        

  if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;




    const resumeOutPut = `
    <h2>Resume</h2>
    <p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Phone:</strong>${phone}</p>


   
     <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;
    
  

    const resumeOutputElement = document.getElementById('ResumeForm');
    


    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutPut;
    } else {
      console.error('the resume output elements are missing');
    }
  }
   else {
    console.error('one or more output elements are missing');
  }
     
}
);
 

