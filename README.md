# cpsc490-2018S-a1

Website for song lyrics from my latest parody song.

I explored using CSS to style footnotes much more carefully than I had 
previously. Footnote references are now automatically numbered, and clicking
on a footnote reference animates a highlight over the corresponding footnote.

I also used JavaScript for two purposes:

1) A silly footnote that simply pops up an alert box (intentionally jarring).

2) Another silly footnote that rearranges itself (as if two sentences vied
to put themselves in the footnote in parallel) each time the corresponding
reference is clicked.

This isn't the 15-20 hour project I was supposed to do, but it's a start in that
direction. Now, I need to move on to BCS Admissions!

However, if I were going to continue, I'd probably focus a bit on  
"upgrading" my footnote framework, likely via JS:

1) All footnote content should appear at the footnote reference (though it
would be nice to have the option of separated footnotes as well, but single
ones would be the main way for things to work).

2) Footnote content should include the 'link text', i.e., the words in the song
that form the referring text for the footnote.

3) Footnote bodies should auto-arrange themselves in the footnote section at
the bottom on page load according to order of (first) reference in the page.

4) Clicking a footnote reference should also highlight the link text (like the
footnote is currently highlighted). It may be possible to get :active to do
what I want for this, particularly if I style only the footnote number as a link
but use the whole link text as link (and presumably show it on :hover). Else,
JS?

5) It should be possible to "click back" from a footnote to the point in the 
lyrics that led to that footnote.
# cpsc490-2018S-a1
