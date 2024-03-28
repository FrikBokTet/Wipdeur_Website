// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => { 
    const faqContainer: Element | null = document.querySelector('.faq-content')

    faqContainer!.addEventListener('click', (e) => {
        const target = e.target as HTMLElement; // Cast Event.target to HTMLElement

        if (!target.classList.contains('faq-group-header')) return;

        const groupHeader: HTMLElement | null = target.closest('.faq-group-header');
        
        if (!groupHeader) return;
        
        const group = groupHeader.parentElement;
        const groupBody = group!.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle Icon
        if (icon) {
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        }

        // Toggle Visibility Of Body
        if (groupBody) {
            groupBody.classList.toggle('open');
        }

        // Close Other Open FAQ Bodies
        const otherGroups = faqContainer!.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => { 
            if (otherGroup != group) {
                const otherGroupBody: Element | null = otherGroup.querySelector('.faq-group-body');
                const otherIcon: Element | null = otherGroup.querySelector('.faq-group-header i');

                if (otherGroupBody) {
                    otherGroupBody.classList.remove('open');
                }
                if (otherIcon) {
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            }
        });
    })
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton: Element | null = document.querySelector('.hamburger-button');
    const mobileMenu: Element | null = document.querySelector('.mobile-menu');

    hamburgerButton!.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.toggle('active');
        }
    });
});
