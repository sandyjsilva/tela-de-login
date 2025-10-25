<script>
        // 1. Get references to the HTML elements
        const form = document.getElementById('loginForm');
        const emailInput = document.getElementById('emailInput');
        const passwordInput = document.getElementById('passwordInput');
        const messageDisplay = document.getElementById('message');

        // 2. Add an event listener to the form's submit event
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission (which reloads the page)
            event.preventDefault(); 
            
            // Clear any previous messages
            messageDisplay.textContent = '';

            // Get the current values from the inputs
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // 3. Basic Validation Check
            if (email === '' || password === '') {
                messageDisplay.textContent = 'Por favor, preencha todos os campos.';
                messageDisplay.style.color = 'yellow';
                return; // Stop the function if fields are empty
            }

            // 4. Simulate Authentication (replace this with a real API call later)
            // For example, check against a "dummy" valid user
            if (email === 'teste@plataforma.com' && password === '123456') {
                messageDisplay.textContent = 'Login realizado com sucesso! Redirecionando...';
                messageDisplay.style.color = 'lightgreen';
                
                // In a real application, you would use:
                // window.location.href = '/dashboard'; // Redirect to a new page
                
                // For this example, we'll clear the fields after a delay
                setTimeout(() => {
                    emailInput.value = '';
                    passwordInput.value = '';
                    messageDisplay.textContent = '';
                }, 3000);

            } else {
                // Simulated login failure
                messageDisplay.textContent = 'Email ou senha incorretos.';
                messageDisplay.style.color = 'red';
            }
        });
    </script>
