cat > app.js << 'EOF'
function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        });
}
EOF