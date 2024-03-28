// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    var faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click', function (e) {
        var target = e.target; // Cast Event.target to HTMLElement
        if (!target.classList.contains('faq-group-header'))
            return;
        var groupHeader = target.closest('.faq-group-header');
        if (!groupHeader)
            return;
        var group = groupHeader.parentElement;
        var groupBody = group.querySelector('.faq-group-body');
        var icon = groupHeader.querySelector('i');
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
        var otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach(function (otherGroup) {
            if (otherGroup != group) {
                var otherGroupBody = otherGroup.querySelector('.faq-group-body');
                var otherIcon = otherGroup.querySelector('.faq-group-header i');
                if (otherGroupBody) {
                    otherGroupBody.classList.remove('open');
                }
                if (otherIcon) {
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            }
        });
    });
});
// Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
    var hamburgerButton = document.querySelector('.hamburger-button');
    var mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', function () {
        if (mobileMenu) {
            mobileMenu.classList.toggle('active');
        }
    });
});
