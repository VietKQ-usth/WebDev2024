const box = document.getElementById('add-news');

box.addEventListener('mouseover', function() {
  this.style.boxShadow = '0 3px 6px rgba(0,0,0,0.13)';
  console.log("ok");
});

box.addEventListener('mouseout', function() {
  this.style.boxShadow = 'none';
});

const buttons = document.querySelectorAll('.file-upload');

buttons.forEach(button => {
    button.addEventListener('click', function() { 
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', function() {
        const selectedFile = fileInput.files[0];
        console.log('Selected file:', selectedFile);
    });

    document.body.appendChild(fileInput);

    fileInput.click();
  });
});