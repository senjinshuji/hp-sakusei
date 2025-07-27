// News Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Category Filter
    const tabButtons = document.querySelectorAll('.tab-button');
    const newsCards = document.querySelectorAll('.news-card');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedCategory = this.getAttribute('data-category');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter news cards
            newsCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.classList.remove('hidden');
                    // Trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = 'fadeIn 0.5s ease';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // Pagination (placeholder functionality)
    const pageLinks = document.querySelectorAll('.page-link');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            pageLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            if (!this.classList.contains('next') && !this.classList.contains('prev')) {
                this.classList.add('active');
            }
            
            // Scroll to top of news list
            const newsSection = document.querySelector('.news-list-section');
            if (newsSection) {
                const offsetTop = newsSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add fade in animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .news-card.hidden {
        display: none !important;
    }
`;
document.head.appendChild(style);