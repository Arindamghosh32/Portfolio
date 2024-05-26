document.addEventListener('click', function(e) {
    // Create the ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    // Set the size of the ripple
    const size = 10; // Adjust the size of the ripple as needed
    ripple.style.width = ripple.style.height = `${size}px`;
    
    // Calculate the position of the ripple
    const x = e.clientX - size / 2;
    const y = e.clientY - size / 2;
    
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Append the ripple to the body
    document.body.appendChild(ripple);
    
    // Remove the ripple after the animation is complete
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
