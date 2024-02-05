const pageItems = document.querySelectorAll('.page-item');
const pageContentItems = document.querySelectorAll('.page-content-item');

// Select tab content item 
function selectItem(e) {
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('page-border');
    // Grab content from DOM
    const pageContentItem = document.querySelector(`#${this.id}-content`);
    // Add show Class
    pageContentItem.classList.add('show');
}




function removeBorder(){
    pageItems.forEach(item => item.classList.remove('page-border'));
}

function removeShow(){
    pageContentItems.forEach(item => item.classList.remove('show'));
}



// Listen for tab click

pageItems.forEach(item => item.addEventListener('click', selectItem));