const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        username: username,
        email: email,
        password: password
    };

    let url = '';
    let method = 'POST';

    if (currState === "Login") {
        // Correct API endpoint for login
        url = '';
    } else {
        // Correct API endpoint for registration
        url = '';
    }

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        // Handle success response based on your API
        console.log(data);

    } catch (error) {
        console.error('Error:', error);
        // Handle error, show error message to user, etc.
    }
};
