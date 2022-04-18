if (!navigator.canShare) {
    document.querySelectorAll('.share.button').forEach(button => {
        button.remove();
    })
}
