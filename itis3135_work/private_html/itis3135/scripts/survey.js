function loadImage() {

    var imageInput = document.getElementById('myImg');
    if (imageInput.files.length > 0) {

        var image = imageInput.files[0];
        const imageUrl = URL.createObjectURL(image);
        var imgElement = new Image();
        imgElement.src = imageUrl;
        function resizeImage() {

            var imgWidth = imgElement.width;
            var imgHeight = imgElement.height;
            var pageWidth = window.innerWidth;
            var pageHeight = window.innerHeight;
            var maxWidth = pageWidth * 0.8;
            var maxHeight = pageHeight * 0.6;
  
            if (imgWidth > maxWidth) {
                imgHeight *= maxWidth / imgWidth;
                imgWidth = maxWidth;
            }
            if (imgHeight > maxHeight) {
                imgWidth *= maxHeight / imgHeight;
                imgHeight = maxHeight;
            }
            imgElement.width = imgWidth;
            imgElement.height = imgHeight;
        }
        imgElement.addEventListener('load', function () {
            resizeImage();
            document.getElementById('loadImage').innerHTML = '';
            document.getElementById('loadImage').appendChild(imgElement);
        });
        imgElement.src = imageUrl;
    } else {
        alert('Please upload an image');
    }
}

  document.addEventListener("DOMContentLoaded", function () {
    const coursesContainer = document.getElementById("courses-container");
    const addCourseButton = document.getElementById("add-course");
  
    function addCourse() {
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "course";
        courseInput.placeholder = "Enter a course";
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            coursesContainer.removeChild(courseInput);
            coursesContainer.removeChild(deleteButton);
        });
  
        coursesContainer.appendChild(courseInput);
        coursesContainer.appendChild(deleteButton);
    }
  
    addCourse();
  
    addCourseButton.addEventListener("click", addCourse);
});

    function validateForm(event) {
    const nameInput = document.getElementById("name");
    const mascotInput = document.getElementById("mascot");
    const myImgInput = document.getElementById("myImg");
    const imgCaptionInput = document.getElementById("img-caption");
    const personalBackgroundInput = document.getElementById("personal-background");
    const professionalBackgroundInput = document.getElementById("professional-background");
    const academicBackgroundInput = document.getElementById("academic-background");
    const webDevBackgroundInput = document.getElementById("web-dev-background");
    const machineBackgroundInput = document.getElementById("machine-background");
  
    if (
        nameInput.value === "" ||
        mascotInput.value === "" ||
        (myImgInput.value === "" && !myImgInput.files.length) ||
        imgCaptionInput.value === "" ||
        personalBackgroundInput.value === "" ||
        professionalBackgroundInput.value === "" ||
        academicBackgroundInput.value === "" ||
        webDevBackgroundInput.value === "" ||
        machineBackgroundInput.value === ""
    ) {
        alert("Please fill out all required fields before submitting the form.");
        event.preventDefault();
    }
}

  function resetForm() {
    const form = document.getElementById("BYO-form");
    form.reset();
    document.getElementById('loadImage').innerHTML = '';

 }
  
    document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("BYO-form");
    form.addEventListener("submit", validateForm);
  
    form.addEventListener("submit", function (event) {

        const newPage = document.createElement("div");
        newPage.innerHTML = `
        <h2>Submitted Information</h2>
        <p>Name: ${form.name.value}</p>
        <p>Mascot: ${form.Mascot.value}</p>
        <p>Image Caption: ${form["img-caption"].value}</p>
        <p>Personal Background: ${form.personal-background.value}</p>
        <p>Professional Background: ${form.professional-background.value}</p>
        <p>Academic Background: ${form.academic-background.value}</p>
        <p>Background in Web Development: ${form.web-dev-background.value}</p>
        <p>Primary Computer Platform: ${form.machine-background.value}</p>
        <p>Courses currently taking:</p>
        <ul>
        <li>${form["course1"].value}</li>
        <li>${form["course2"].value}</li>
        <li>${form["course3"].value}</li>
        <li>${form["course4"].value}</li>
        <li>${form["course5"].value}</li>
        </ul>
        <p>Funny/Interesting Item about Yourself: ${form["funny"].value}</p>
        <p>Anything else: ${form["extra"].value}</p>

        <button onclick="location.href='your_previous_page.html'">Back</button>
        `;
        const pageWrapper = document.getElementById("BYO_intro");
        pageWrapper.innerHTML = "";
        pageWrapper.appendChild(newPage);
    });

});