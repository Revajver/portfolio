function scrollToSection(sectionId) {
  const section = document.querySelector(`#${sectionId}`);
  setTimeout(() => {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 100);
}

function goToExternalSite(url) {
  window.open(url, '_blank');
}
