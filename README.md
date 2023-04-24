# Resume

## Convert to letter

The resume's layout can be re-used as a cover letter by running the following JavaScript in your browser's console:

```js
// Clear sidebar
const obsoleteSidebarElements = document.querySelectorAll('.education, .languages');
obsoleteSidebarElements.forEach((el) => el.remove());

// Update main content
const resumeElement = document.querySelector('.resume');
resumeElement.innerHTML = `
    <p class="d-flex">
        <strong>Application Software Developer</strong>
        <span class="ms-auto">2022-01-01</span>
    </p>
    <p>Dear Sir or Madam,</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna cursus eget nunc scelerisque viverra. Nam at lectus urna duis convallis convallis. Risus pretium quam vulputate dignissim suspendisse. Erat imperdiet sed euismod nisi porta lorem mollis aliquam. A diam maecenas sed enim ut sem viverra. A lacus vestibulum sed arcu. At urna condimentum mattis pellentesque id nibh tortor id aliquet. Aliquam eleifend mi in nulla posuere sollicitudin. Nulla facilisi cras fermentum odio eu feugiat pretium. Malesuada pellentesque elit eget gravida cum sociis natoque.</p>
`;
```
