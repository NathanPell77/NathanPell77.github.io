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
    const introImageInput = document.getElementById("myImg");
    const imageCaptionInput = document.getElementById("img-caption");
    const perbackgroundInput = document.getElementById("personal-background");
    const perobackgroundInput = document.getElementById("professional-background");
    const AcadmbackgroundInput = document.getElementById("academic-background");
    const webdivbackgroundInput = document.getElementById("web-dev-background");
    const PrimaryCompPlatformInput = document.getElementById("machine-background");
  
    if (
        nameInput.value === "" ||
        mascotInput.value === "" ||
        (introImageInput.value === "" && !introImageInput.files.length) ||
        imageCaptionInput.value === "" ||
        perbackgroundInput.value === "" ||
        perobackgroundInput.value === "" ||
        AcadmbackgroundInput.value === "" ||
        webdivbackgroundInput.value === "" ||
        PrimaryCompPlatformInput.value === ""
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
        <p>Image Caption: ${form["image-caption"].value}</p>
        <p>Personal Background: ${form.perbackground.value}</p>
        <p>Professional Background: ${form.perobackground.value}</p>
        <p>Academic Background: ${form.Acadmbackground.value}</p>
        <p>Background in Web Development: ${form.webdivbackground.value}</p>
        <p>Primary Computer Platform: ${form.PrimaryCompPlatform.value}</p>
        <p>Courses currently taking:</p>
        <ul>
          <li>${form["course1"].value}</li>
          <li>${form["course2"].value}</li>
          <li>${form["course3"].value}</li>
          <li>${form["course4"].value}</li>
          <li>${form["course5"].value}</li>
        </ul>
        <p>Funny/Interesting Item about Yourself: ${form["Funny-thing"].value}</p>
        <p>Anything else: ${form["Anything-else"].value}</p>
  
        <button onclick="location.href='your_previous_page.html'">Back</button>
      `;
      const pageWrapper = document.getElementById("BYO_intro");
      pageWrapper.innerHTML = "";
      pageWrapper.appendChild(newPage);
    });
});