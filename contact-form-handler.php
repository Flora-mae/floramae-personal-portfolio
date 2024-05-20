<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
      event.preventDefault();

      var formData = new FormData(this);

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'contact-form-handler.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        alert(response.message);
        // Optionally, can reset the form after successful submission
        if (response.status === 'success') {
          document.getElementById('contactForm').reset();
        }
      };

      xhr.send(new URLSearchParams(formData));
    });
  });
</script>

</body>
</html>