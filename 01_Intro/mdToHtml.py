from markdown import markdown

open('post.html', 'w').write(markdown(open('post.md', 'r', errors='ignore').read())).close()