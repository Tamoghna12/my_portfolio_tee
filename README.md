# Portfolio Blog System

This is a simple, static blog system that uses Markdown for content creation. It's designed to be easy to use and maintain while providing a beautiful reading experience.

## Directory Structure

```
portfolio/
├── blog/
│   ├── posts/          # All blog posts in Markdown format
│   ├── template-md.html # Template for blog post pages
│   └── template.html   # (legacy HTML template)
├── js/
│   └── blog.js        # Blog functionality
├── blog.html          # Blog listing page
├── index.html         # Main portfolio page
└── style.css         # Styles for the site
```

## Creating a New Blog Post

1. Create a new `.md` file in the `blog/posts/` directory
2. Name it using URL-friendly format (e.g., `my-new-post.md`)
3. Add the frontmatter at the top of your file:
   ```markdown
   ---
   title: Your Post Title
   date: June 18, 2025
   category: Your Category
   description: A brief description of your post
   ---
   ```
4. Write your content using Markdown syntax
5. Add the filename to the `posts` array in `blog.html`:
   ```javascript
   const posts = [
       'why-i-love-data-science.md',
       'my-new-post.md'  // Add your new post here
   ];
   ```

## Markdown Features

### Basic Syntax

```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**Bold text**
*Italic text*
***Bold and italic***

[Link text](URL)
![Image alt text](image-url)

> Blockquote text

- Bullet point
- Another bullet point
  - Nested bullet point

1. Numbered list
2. Second item
   1. Nested numbered item
```

### Code Blocks

````markdown
```python
def hello_world():
    print("Hello, World!")
```

```javascript
function greeting() {
    console.log("Hello!");
}
```
````

### Tables

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
```

### Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.
```

### Definition Lists

```markdown
Term
: Definition
```

## Styling Guide

Your blog posts should follow these best practices:

1. Use clear, descriptive headings
2. Break up long content with subheadings
3. Use code blocks for technical content
4. Include relevant images when needed
5. Use lists to organize information
6. Keep paragraphs concise

## Image Guidelines

- Images should be optimized for web
- Recommended formats: JPEG for photos, PNG for graphics
- Maximum width: 800px
- Place images in a relevant directory under `blog/posts/images/`

## Technical Notes

The blog system uses:
- Marked.js for Markdown parsing
- DOMPurify for XSS protection
- highlight.js for code syntax highlighting
- Custom CSS for responsive design

## Development

To add new features or modify the blog system:

1. Blog posts are rendered using `js/blog.js`
2. Styling is controlled by both `style.css` and inline styles in `template-md.html`
3. The blog listing page (`blog.html`) handles post discovery and card creation
