document.addEventListener('DOMContentLoaded', function() {
    const resources = [
        { emoji: "🎨", href: "https://amzn.to/4bkdOwP", text: "Interaction of Color", dataFilter: ["book"] },
        { emoji: "🗣️", href: "https://amzn.to/3XCp6JF", text: "The Art of Looking Sideways", dataFilter: ["book"] },
        { emoji: "🧐", href: "https://amzn.to/3XGBSXI", text: "Thinking Fast and Slow", dataFilter: ["book"] },
        { emoji: "⬛️", href: "https://amzn.to/4bkegev", text: "Grid Systems in Graphic Design", dataFilter: ["book"] },
        { emoji: "✨", href: "https://amzn.to/4eCOSnf", text: "A *New* Program for Graphic Design", dataFilter: ["book"] },
        { emoji: "👌", href: "https://amzn.to/3VHKL0x", text: "As Little Design as Possible", dataFilter: ["book"] },
        { emoji: "🔑", href: "https://amzn.to/45JnvUy", text: "Elements of Typographic Style", dataFilter: ["book"] },
        { emoji: "👁️", href: "https://amzn.to/3VJlaUO", text: "Ways of Seeing", dataFilter: ["book"] },
        { emoji: "📊", href: "https://amzn.to/45FbQpC", text: "Visual Display of Quantitative Information", dataFilter: ["book"] },
        { emoji: "👯", href: "https://amzn.to/3xzH4BZ", text: "User Friendly", dataFilter: ["book"] },
        { emoji: "🐍", href: "https://amzn.to/45Y7L0d", text: "Graphesis", dataFilter: ["book"] },
        { emoji: "👀", href: "https://amzn.to/45Fc0xe", text: "Envisioning Information", dataFilter: ["book"] },
        { emoji: "📀", href: "https://amzn.to/3VV9FuV", text: "Designing for the Digital Age", dataFilter: ["book"] },
        { emoji: "🕷️", href: "https://amzn.to/4cEqeAM", text: "Modular Web Design", dataFilter: ["book"] },
        { emoji: "🧘🏻", href: "https://amzn.to/3KZzBz9", text: "Digital Minimalism", dataFilter: ["book"] },
        { emoji: "🦄", href: "https://amzn.to/3VECwT6", text: "The Architecture of Happiness", dataFilter: ["book"] },
        { emoji: "👍", href: "https://www.itsnicethat.com", text: "It's Nice That", dataFilter: ["inspiration"] },
        { emoji: "🧑‍💻", href: "https://www.creativeapplications.net", text: "Creative Applications", dataFilter: ["inspiration"] },
        { emoji: "👨‍🎓", href: "https://publicdomainreview.org", text: "The Public Domain Review", dataFilter: ["inspiration"] },
        { emoji: "⚪️", href: "https://reas.com", text: "Casey Reas", dataFilter: ["inspiration"] },
        { emoji: "😍", href: "https://www.reddit.com/r/dataisbeautiful/", text: "r/dataisbeautiful", dataFilter: ["inspiration"] },
        { emoji: "🆔", href: "https://the-brandidentity.com", text: "The Brand Identity", dataFilter: ["inspiration"] },
        { emoji: "🔠", href: "https://letterformarchive.org", text: "Letterform Archive", dataFilter: ["inspiration"] },
        { emoji: "🧰", href: "https://www.designkit.org", text: "IDEO Design Kit", dataFilter: ["inspiration"] },
        { emoji: "🐶", href: "https://css-tricks.com", text: "CSS Tricks", dataFilter: ["inspiration"] },
        { emoji: "📈", href: "https://trends.google.com/trends/", text: "Google Trends", dataFilter: ["inspiration"] },
        { emoji: "📚", href: "https://mitpress.mit.edu", text: "MIT Press", dataFilter: ["inspiration"] },
        { emoji: "🇨🇭", href: "https://www.swiss-miss.com", text: "Swiss Miss", dataFilter: ["inspiration"] },
        { emoji: "🍮", href: "https://pudding.cool", text: "The Pudding", dataFilter: ["inspiration"] },
    ];

    const resourceFilter = document.getElementById('#resourceFilter');
    
    // Iterate over each resource
    resources.forEach(resource => {
        // Create the outer div element
        const div = document.createElement('div');
        div.className = 'grid-item resource-item filter-item show-flex';
        div.setAttribute('data-filter', resource.dataFilter.join(' '));
        
        // Create the span with the emoji
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'img';
        const innerSpan = document.createElement('span');
        innerSpan.textContent = resource.emoji;
        emojiSpan.appendChild(innerSpan);
        
        // Create the a tag
        const aTag = document.createElement('a');
        aTag.href = resource.href;
        aTag.target = '_blank';
        aTag.className = 'resource-name';
        aTag.textContent = resource.text;
        
        // Append the emoji span and the a tag to the div
        div.appendChild(emojiSpan);
        div.appendChild(aTag);
        
    }); 

    resources.insertAdjacentElement("afterend", resourceFilter);
});
