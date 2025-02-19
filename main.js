const resizeHandle = document.getElementById('resize-handle');
const leftDiv = document.getElementById('sidebar');

let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(e) {
  if (isResizing) {
    // Calculate new width for the left div
    const newWidth = e.clientX - leftDiv.getBoundingClientRect().left;
    leftDiv.style.width = `${newWidth}px`;
  }
}

function stopResize() {
  isResizing = false;
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}