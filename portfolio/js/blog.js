// Sanitize HTML to prevent XSS attacks
function sanitizeHTML(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}

// Convert markdown to HTML and render
async function renderMarkdown(markdownContent) {
    try {
        // Configure marked options
        marked.setOptions({
            gfm: true, // GitHub Flavored Markdown
            breaks: true, // Add <br> on single line breaks
            headerIds: true, // Add ids to headers for linking
            mangle: false, // Don't escape autolinked email addresses
            pedantic: false, // Don't be too strict with markdown spec
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            }
        });

        // Add support for task lists
        marked.use({
            renderer: {
                listitem(text, task, checked) {
                    if (task) {
                        return `<li class="task-list-item"><input type="checkbox" ${checked ? 'checked' : ''} disabled> ${text}</li>`;
                    }
                    return `<li>${text}</li>`;
                },
                image(href, title, text) {
                    return `<figure>
                        <img src="${href}" alt="${text}" ${title ? `title="${title}"` : ''}>
                        ${title ? `<figcaption>${title}</figcaption>` : ''}
                    </figure>`;
                }
            }
        });

        const html = marked.parse(markdownContent);
        const sanitized = DOMPurify.sanitize(html, {
            ADD_TAGS: ['input'],
            ADD_ATTR: ['checked', 'disabled']
        });
        return sanitized;
    } catch (error) {
        console.error('Error rendering markdown:', error);
        return '<p>Error rendering content</p>';
    }
}

// Fetch and render markdown content
async function loadMarkdownPost() {
    const postPath = window.location.pathname.split('/').pop().replace('.html', '.md');
    try {
        const response = await fetch(`/portfolio/blog/posts/${postPath}`);
        if (!response.ok) throw new Error('Failed to load post');
        const markdown = await response.text();
        
        // Parse frontmatter
        const { content, metadata } = parseFrontmatter(markdown);
        
        // Update page metadata
        document.title = `${metadata.title} - Tamoghna Das`;
        document.querySelector('h1').textContent = metadata.title;
        document.querySelector('.blog-date').textContent = metadata.date;
        document.querySelector('.blog-category').textContent = metadata.category;
        
        // Render content
        const contentHtml = await renderMarkdown(content);
        document.querySelector('.blog-content-body').innerHTML = contentHtml;
        
        // Initialize syntax highlighting
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    } catch (error) {
        console.error('Error loading post:', error);
        document.querySelector('.blog-content-body').innerHTML = '<p>Error loading post</p>';
    }
}

// Parse frontmatter from markdown
function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
        return {
            metadata: {},
            content: markdown
        };
    }
    
    const frontmatter = match[1];
    const content = match[2];
    
    // Parse YAML frontmatter
    const metadata = {};
    frontmatter.split('\n').forEach(line => {
        const [key, ...values] = line.split(':');
        if (key && values.length > 0) {
            metadata[key.trim()] = values.join(':').trim();
        }
    });
    
    return { metadata, content };
}
