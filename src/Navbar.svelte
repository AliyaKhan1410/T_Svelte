<script>
    // No external props here, but if you need to log clicks or events, you can add logging

    function handleButtonClick(buttonType) {
        try {
            console.log(`${buttonType} button clicked`);
        } catch (error) {
            console.error('Error handling button click:', error);
        }
    }
</script>

<header>
    <h1>Welcome to My E-commerce Site</h1>
    <nav>
        <button class="auth-btn" on:click={() => handleButtonClick('Sign Up')}>Sign Up</button>
        <button class="auth-btn" on:click={() => handleButtonClick('Sign In')}>Sign In</button>
    </nav>
</header>
