function kawaiify() {
    const allParagraphTags = document.getElementsByTagName("p");
    for (let i = 0; i < allParagraphTags.length; i++) {
        let node = allParagraphTags[i];
        if (node.innerHTML) {
            const newText = node.innerHTML.replace(/[lr]/g, 'w');
            node.innerHTML = newText;
        }
    }
}

kawaiify(); 